import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  useToast,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { PasswordInput } from '../components/shared/Form';
import CustomInput from '../components/shared/Input';
import { useChefAuth } from '../contexts/Auth';

interface LoginFormProps {
  switchToSignup: () => void;
  loginFunction?: (email: string, password: string) => any;
}

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password must be 8 characters long'),
});

const LoginScreen: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { switchToSignup } = props;
  const { login } = useChefAuth();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: loginSchema,
    onSubmit: async (data) => {
      setLoading(true);
      console.log(' values are ', data);

      login(data.email, data.password)
        .then(() => {
          setLoading(false);

          history.push('/dashboard');
        })
        .catch((err) => {
          console.log(err);
          let message = 'Something went wrong . Please try again';
          if (err.response) {
            if (err.response.status === 403) {
              message = 'Wrong Password';
              formik.resetForm({
                values: { email: data.email, password: '' },
                errors: {},
              });
            } else if (err.response.status === 404) {
              message = 'No User found with email';
              formik.resetForm({
                values: { email: '', password: '' },
                errors: {},
              });
            }
          }
          setLoading(false);

          toast({ title: 'error', description: message, status: 'error' });
        });

      console.log('datais ', data);
    },
  });
  const { errors, handleChange, touched, values } = formik;

  return (
    <Flex flexDirection="column" flex={1} p={3}>
      <CardHeader signup={false} />
      <Flex flexDirection="column" as="form" onSubmit={formik.handleSubmit}>
        <CustomInput
          label="Email"
          name="email"
          required
          mb={3}
          onChange={handleChange}
          error={touched.email && !!errors.email}
          errorMessage={errors.email}
          value={values.email}
        />

        <FormControl mb={3}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <PasswordInput
            name="password"
            type="password"
            onChange={handleChange}
            aria-describedby="password-error-text"
            value={formik.values.password}
          />
          <FormErrorMessage aria-describedby="password-error-text">
            {' '}
            {errors.password}{' '}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={2}
          isLoading={loading}
          type="submit"
          alignSelf="center"
          bg="primary"
          color="white"
          _disabled={{
            cursor: 'not-allowed',
          }}
          borderWidth={1}
          borderColor="primary"
          _hover={{
            bg: 'white',
            color: 'primary',
          }}
          data-testid="submitBtn"
        >
          Login
        </Button>
      </Flex>
      <CardFooter
        label="Dont have an account"
        onClick={switchToSignup}
        buttonText="Sign Up"
      />
    </Flex>
  );
};

LoginScreen.defaultProps = {
  loginFunction: (email: string, password: string) => ({ email, password }),
};

interface CardFooterProps {
  onClick: () => void;
  label: string;
  buttonText: string;
}
export const CardFooter: React.FC<CardFooterProps> = (
  props: CardFooterProps,
) => {
  const { onClick, label, buttonText } = props;
  return (
    <Flex mt={3} flex={1} justifyContent="space-between" alignItems="center">
      <Text fontSize="md">{label}</Text>
      <Button
        alignSelf="center"
        borderWidth={1}
        borderRadius={4}
        borderColor="orange.400"
        color="orange.400"
        bg="white"
        _hover={{
          color: 'white',
          bg: 'orange.400',
        }}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};

interface CardHeaderProps {
  signup: boolean;
}
const CardHeaderMemo = (props: CardHeaderProps) => {
  const { signup } = props;
  return (
    <Text alignSelf="center" fontSize="2xl">
      {signup ? 'Create Account ' : 'Login '}
    </Text>
  );
};

export const CardHeader = memo(CardHeaderMemo);
export default LoginScreen;
