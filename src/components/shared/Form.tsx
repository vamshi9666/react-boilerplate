/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/core';
import { FieldArray, Form, Formik } from 'formik';
import isEmpty from 'lodash/isEmpty';
import * as React from 'react';
import { useMemo, useRef, useState } from 'react';
import { ObjectSchema } from 'yup';
import { uploadToCloudinary } from '../../common/Utils';

type StylingProps = {
  titleStyles?: BoxProps;
  submitButtonProps?: ButtonProps;
};

type CommmonFormConfig = {
  dataKey: string;
  label: string;
  inputType:
    | 'text' // unchanged text input done
    | 'email' // primitive text input  done
    | 'select' // primitive select with options done
    | 'number' // primitive number input done
    | 'textarea' // primitive textarea done
    | 'password' // with show password suffix done
    | 'checkbox' // primitive  checkbox done
    | 'array' // ????
    | 'image'; // button with icon and file input hidden
  options?: string[];
  testId?: string;
  placeHolder?: string;
  style?: BoxProps;
  required?: boolean;
  arrayDirection?: 'row' | 'column';
  arrayDynamic?: boolean;
};
export type AwesomeFormItemConfig = CommmonFormConfig & {
  formItems?: Array<CommmonFormConfig>;
};

type AwesomeFormValues = {
  [field: string]: any;
};

export interface AwesomeFormProps extends StylingProps {
  title?: string;
  formItems: Array<AwesomeFormItemConfig>;
  onSubmit: (data: AwesomeFormValues) => Promise<any>;
  validationSchema?: ObjectSchema;
  initialValues: { [key: string]: any };
  submitTitle?: string;
  formEnabled?: boolean;
}

export const PasswordInput: React.FC<InputProps> = (props: InputProps) => {
  const [show, setShow] = useState(false);
  const { ...allProps } = props;
  return (
    <InputGroup>
      <Input {...allProps} type={show ? 'text' : 'password'} />
      <InputRightElement>
        {' '}
        <IconButton
          aria-label="password-show-button"
          onClick={() => setShow(!show)}
          icon={show ? 'view-off' : 'view'}
        />{' '}
      </InputRightElement>
    </InputGroup>
  );
};

type ImageInputProps = {
  onChange: (url: string) => any;
  label: string;
  testId?: string;
  defaultSrc?: string | null;
  disabled?: boolean;
};

export const ImageInput: React.FC<ImageInputProps> = (
  props: ImageInputProps,
) => {
  const { label, onChange, testId, defaultSrc, disabled } = props;
  const [loading, setLoading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState(null);

  const finalUrl = useMemo(() => {
    if (!isEmpty(imageUrl)) {
      return imageUrl;
    }

    return defaultSrc;
  }, [defaultSrc, imageUrl]);
  const imagePresent = useMemo(() => {
    return !isEmpty(finalUrl);
  }, [finalUrl]);
  return (
    <Box>
      {imagePresent ? (
        <>
          <Flex borderWidth={1} rounded="md" borderColor="teal.500">
            <Image
              flex={1}
              src={finalUrl as any}
              width={140}
              height={120}
              objectFit="contain"
            />
            <Icon
              marginLeft="-4px"
              marginBottom="-4px"
              name="small-close"
              borderWidth={1}
              borderColor="black"
              rounded="md"
              width="20px"
              height="20px"
              onClick={() => {
                setImageUrl(null);
                onChange('');
              }}
            />
          </Flex>
        </>
      ) : (
        <>
          <input
            ref={fileInput}
            type="file"
            onChange={async (e) => {
              if (e.target.files?.length === 1) {
                setLoading(true);
                const resultUrl = await uploadToCloudinary(e.target.files[0]);
                setLoading(false);
                setImageUrl(resultUrl);
                onChange(resultUrl);
              }
            }}
            style={{
              display: 'none',
              width: 0,
              height: 0,
            }}
          />
          <Button
            isDisabled={disabled}
            data-testid={testId}
            isLoading={loading}
            leftIcon="arrow-up"
            onClick={() => {
              if (fileInput.current !== null) {
                fileInput.current.click();
              }
            }}
          >
            {label}
          </Button>
        </>
      )}
    </Box>
  );
};

ImageInput.defaultProps = {
  testId: '',
  disabled: false,
  defaultSrc: null,
};

const AwesomeForm: React.FC<AwesomeFormProps> = (props: AwesomeFormProps) => {
  const [loading, setLoading] = useState(false);

  const {
    title,
    formItems,
    onSubmit,
    initialValues,
    submitTitle,
    validationSchema,
    formEnabled,
  } = props;
  return (
    <Formik
      validateOnMount
      {...{ initialValues, validationSchema }}
      onSubmit={async (data) => {
        setLoading(true);
        onSubmit(data)
          .then(() => {
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      }}
    >
      {({
        errors,
        values,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        touched,
        submitCount,
      }) => {
        // console.log('erros are', errors);
        return (
          <Box px="2" py={2} display="flex" flexDirection="column">
            <Text fontSize="2xl"> {title}</Text>
            <Form>
              <form onSubmit={handleSubmit}>
                <Flex flexDirection="column">
                  {formItems.map((f) => {
                    const {
                      label,
                      dataKey,
                      required,
                      inputType,
                      options,
                      formItems: innerFormItems,
                      arrayDirection,
                      arrayDynamic,
                      testId,
                    } = f;

                    const errorMessage = Array.isArray(errors[dataKey])
                      ? null
                      : errors[dataKey] || null;
                    const isTouched = !!touched[dataKey];
                    // console.log('error message', errors);
                    const isInvalid =
                      !!errorMessage && (isTouched || submitCount > 0);
                    const defaultValue = initialValues[dataKey];
                    const value = values[dataKey];
                    return (
                      <FormControl
                        mb={3}
                        key={dataKey}
                        display={inputType === 'checkbox' ? 'flex' : 'default'}
                        isRequired={required}
                        {...{ isInvalid }}
                      >
                        <FormLabel htmlFor={dataKey}>{label}</FormLabel>
                        <>
                          {inputType === 'text' || inputType === 'email' ? (
                            <Input
                              isDisabled={!formEnabled}
                              id={dataKey}
                              type={inputType}
                              name={dataKey}
                              aria-describedby={`${label}error-text`}
                              {...{ value, defaultValue }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              data-testid={testId}
                            />
                          ) : inputType === 'password' ? (
                            <PasswordInput
                              id={dataKey}
                              isDisabled={!formEnabled}
                              name={dataKey}
                              {...{ value, defaultValue }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              data-testid={testId}
                            />
                          ) : inputType === 'textarea' ? (
                            <Textarea
                              id={dataKey}
                              type={inputType}
                              isDisabled={!formEnabled}
                              name={dataKey}
                              aria-describedby={`${label}error-text`}
                              {...{ value, defaultValue }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              data-testid={testId}
                            />
                          ) : inputType === 'select' ? (
                            <Select
                              id={dataKey}
                              isDisabled={!formEnabled}
                              name={dataKey}
                              data-testid={testId}
                              aria-describedby={`${label}error-text`}
                              {...{ value, defaultValue }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              {options?.map((o) => (
                                <option key={o} value={o}>
                                  {' '}
                                  {o}
                                </option>
                              ))}
                            </Select>
                          ) : inputType === 'number' ? (
                            <Input
                              data-testid={testId}
                              isDisabled={!formEnabled}
                              id={dataKey}
                              type="number"
                              name={dataKey}
                              aria-describedby={`${label}error-text`}
                              {...{ value, defaultValue }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          ) : inputType === 'checkbox' ? (
                            <Checkbox
                              data-testid={testId}
                              id={dataKey}
                              isDisabled={!formEnabled}
                              name={dataKey}
                              aria-describedby={`${label}error-text`}
                              {...{ value, defaultValue }}
                              onChange={handleChange}
                              isChecked={value}
                              defaultIsChecked={defaultValue}
                              onBlur={handleBlur}
                            />
                          ) : inputType === 'image' ? (
                            <ImageInput
                              data-testid={testId}
                              label={label}
                              disabled={!formEnabled}
                              defaultSrc={defaultValue}
                              onChange={(src) => setFieldValue(dataKey, src)}
                              testId={dataKey}
                            />
                          ) : inputType === 'array' ? (
                            <FieldArray name={dataKey}>
                              {(arrayHelpers) => (
                                <Flex flexDirection={arrayDirection}>
                                  {value.map((a: any, index: number) => {
                                    const currentRowErrors =
                                      // @ts-ignore
                                      errorMessage && errorMessage[index];
                                    const currentRowDefaultValues =
                                      defaultValue[index];
                                    return (
                                      <Flex
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                        alignItems="flex-end"
                                        justifyContent="space-between"
                                      >
                                        <Flex mt={3} alignItems="center">
                                          {innerFormItems?.map(
                                            (innerF, iIndex) => {
                                              const {
                                                inputType: aInputType,
                                                dataKey: aDataKey,
                                                label: aLabel,
                                                options: aOptions,
                                              } = innerF;
                                              const aErrorMessage =
                                                (currentRowErrors &&
                                                  currentRowErrors[dataKey]) ||
                                                '';
                                              const innerValue = a[aDataKey];
                                              const showLabel =
                                                aInputType !== 'image';
                                              const name = `${dataKey}[${index}].${aDataKey}`;
                                              return (
                                                <FormControl
                                                  key={iIndex}
                                                  isRequired={required}
                                                  isDisabled={!formEnabled}
                                                  mr={2}
                                                  isInvalid={!!aErrorMessage}
                                                >
                                                  {showLabel && (
                                                    <FormLabel
                                                      htmlFor={dataKey}
                                                      color="gray.500"
                                                    >
                                                      {aLabel}
                                                    </FormLabel>
                                                  )}
                                                  {aInputType === 'text' ||
                                                  aInputType === 'email' ? (
                                                    <Input
                                                      id={dataKey}
                                                      type="text"
                                                      aria-describedby={`${aLabel}-error-text`}
                                                      value={innerValue}
                                                      {...{
                                                        defaultValue,
                                                        name,
                                                      }}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                    />
                                                  ) : aInputType ===
                                                    'password' ? (
                                                    <PasswordInput
                                                      isDisabled={!formEnabled}
                                                      id={dataKey}
                                                      value={innerValue}
                                                      {...{
                                                        defaultValue,
                                                        name,
                                                      }}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                    />
                                                  ) : aInputType ===
                                                    'textarea' ? (
                                                    <Textarea
                                                      id={dataKey}
                                                      isDisabled={!formEnabled}
                                                      value={innerValue}
                                                      aria-describedby={`${aLabel}-error-text`}
                                                      {...{
                                                        defaultValue,
                                                        name,
                                                      }}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                    />
                                                  ) : aInputType ===
                                                    'select' ? (
                                                    <Select
                                                      isDisabled={!formEnabled}
                                                      id={dataKey}
                                                      aria-describedby={`${aLabel}-error-text`}
                                                      {...{
                                                        defaultValue,
                                                        name,
                                                      }}
                                                      value={innerValue}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                    >
                                                      {aOptions?.map((o) => (
                                                        <option
                                                          key={o}
                                                          value={o}
                                                        >
                                                          {' '}
                                                          {o}
                                                        </option>
                                                      ))}
                                                    </Select>
                                                  ) : aInputType ===
                                                    'number' ? (
                                                    <NumberInput
                                                      id={dataKey}
                                                      isDisabled={!formEnabled}
                                                      value={innerValue}
                                                      aria-describedby={`${aLabel}-error-text`}
                                                      {...{
                                                        defaultValue,
                                                        name,
                                                      }}
                                                      onChange={(val) => {
                                                        setFieldValue(
                                                          name,
                                                          val,
                                                        );
                                                      }}
                                                      onBlur={handleBlur}
                                                    >
                                                      <NumberInputField />
                                                      <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                      </NumberInputStepper>
                                                    </NumberInput>
                                                  ) : aInputType ===
                                                    'checkbox' ? (
                                                    <Checkbox
                                                      id={dataKey}
                                                      isDisabled={!formEnabled}
                                                      value={innerValue}
                                                      aria-describedby={`${aLabel}-error-text`}
                                                      {...{
                                                        defaultValue,
                                                        name,
                                                      }}
                                                      defaultIsChecked={
                                                        defaultValue
                                                      }
                                                      isChecked={innerValue}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                    />
                                                  ) : aInputType === 'image' ? (
                                                    <ImageInput
                                                      label={aLabel}
                                                      disabled={!formEnabled}
                                                      defaultSrc={
                                                        currentRowDefaultValues[
                                                          aDataKey
                                                        ]
                                                      }
                                                      onChange={(src) => {
                                                        const tempName = `${dataKey}[${index}].${aDataKey}`;
                                                        setFieldValue(
                                                          tempName,
                                                          src,
                                                        );
                                                      }}
                                                      testId={aDataKey}
                                                    />
                                                  ) : null}
                                                  <FormErrorMessage
                                                    id={`${aLabel}-error-text`}
                                                  >
                                                    {aErrorMessage}
                                                  </FormErrorMessage>
                                                </FormControl>
                                              );
                                            },
                                          )}
                                        </Flex>
                                        {arrayDynamic === true && (
                                          <>
                                            {index !== 0 && (
                                              <IconButton
                                                isDisabled={!formEnabled}
                                                aria-label="minus-variant"
                                                icon="minus"
                                              />
                                            )}
                                            <IconButton
                                              isDisabled={!formEnabled}
                                              onClick={() =>
                                                arrayHelpers.push({
                                                  ...defaultValue[0],
                                                })
                                              }
                                              aria-label="add-variant"
                                              icon="add"
                                            />
                                          </>
                                        )}
                                      </Flex>
                                    );
                                  })}
                                </Flex>
                              )}
                            </FieldArray>
                          ) : null}
                        </>
                        <FormErrorMessage id={`${label}error-text`}>
                          {errorMessage}{' '}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  })}

                  <Button
                    width="60%"
                    isLoading={loading}
                    alignSelf="center"
                    type="submit"
                    borderWidth={1}
                    borderColor="orange.400"
                    bg="orange.400"
                    color="white"
                    _hover={{
                      bg: 'white',
                      color: 'orange.400',
                    }}
                  >
                    {submitTitle}
                  </Button>
                </Flex>
              </form>
            </Form>
          </Box>
        );
      }}
    </Formik>
  );
};

AwesomeForm.defaultProps = {
  title: '',

  submitTitle: 'Submit',
  titleStyles: {
    fontSize: '2xl',
    color: 'black',
  },
  formEnabled: true,
};
export default AwesomeForm;

// https://twitter.com/EmmanuelCAdigwe/status/1272510944162308097
