/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/core';
import * as React from 'react';

interface CustomInputProps extends InputProps {
  label: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  name: string;
}

const CustomInput = (props: CustomInputProps) => {
  const {
    label,
    error,
    errorMessage,
    required,
    onBlur,
    onChange,
    name,
    ...allProps
  } = props;
  return (
    <FormControl
      isInvalid={error}
      isRequired={required}
      display="flex"
      justifyContent="center"
      flexDir="column"
    >
      <FormLabel htmlFor={label} flexDirection="row">
        {label}
      </FormLabel>
      <Input
        id={label}
        name={name}
        aria-describedby={`${label}error-text`}
        onChange={onChange}
        onBlur={onBlur}
        {...allProps}
      />
      <FormErrorMessage id={`${label}error-text`}>
        {errorMessage}{' '}
      </FormErrorMessage>
    </FormControl>
  );
};

CustomInput.defaultProps = {
  error: false,
  errorMessage: '',
  required: false,
};
export default CustomInput;
