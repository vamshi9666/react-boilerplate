import { Box, Button, Flex, Image, useToast } from '@chakra-ui/core';
import { useFormik } from 'formik';
import React, { memo, useState } from 'react';
import * as yup from 'yup';
import CustomInput from '../components/shared/Input';
import SignupModal from '../components/signupModal';
import { useChefWithEmailLazyQuery } from '../generated/graphql';
import { LIGHT_ORANGE_SEC } from '../styles/colors';
import LoginForm, { CardFooter, CardHeader } from './login';

const formContainerStyle: any = {
  display: 'flex',
  flexDirection: 'column',
};

const SignUp: React.FC = () => {
  const [signUp, setSignup] = useState<boolean>(true);

  return (
    <Flex flex={1} flexDir={{ sm: 'column', lg: 'row' }}>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={['column', 'row']}
        p={4}
        backgroundColor={LIGHT_ORANGE_SEC}
      >
        <Box
          w="md"
          borderWidth="1px"
          background="white"
          rounded="lg"
          overflow="hidden"
          p={2}
        >
          {signUp ? (
            <SignUpForm switchtologin={() => setSignup(false)} />
          ) : (
            <LoginForm switchToSignup={() => setSignup(true)} />
          )}
        </Box>
      </Flex>
      <RightPart />
    </Flex>
  );
};
export default SignUp;

const RightPartMemo = () => (
  <Image
    style={{ objectFit: 'contain', flex: 1, maxHeight: '90vh' }}
    src="https://res.cloudinary.com/dwo8ep45k/image/upload/v1593676206/static/cooking-dishes-herb-kitchen-1109197_oal8y8.jpg"
  />
);

const RightPart = React.memo(RightPartMemo);

interface SignUpFormProps {
  switchtologin: () => void;
}

const signupPreviewSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  firstName: yup.string().required('First name is required'),
});

const SignUpFormMemo = (props: SignUpFormProps) => {
  const { switchtologin } = props;
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);

  const [getChef, { loading }] = useChefWithEmailLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.users.length > 0) {
        toast({
          title: 'Error',
          description:
            'there is an account connected to this email. Please login',
          status: 'error',
          isClosable: true,
        });
      } else {
        setShowModal(true);
      }
    },
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: signupPreviewSchema,
    onSubmit: async (values) => {
      getChef({
        variables: {
          email: values.email,
        },
      });
    },
  });
  return (
    <Flex flexDirection="column" flex={1} p={3}>
      <CardHeader signup />
      <Flex
        as="form"
        flexDirection="column"
        onSubmit={formik.handleSubmit}
        style={formContainerStyle}
      >
        <CustomInput
          mb={3}
          required
          value={formik.values.firstName}
          label="First Name"
          error={!!formik.errors.firstName}
          errorMessage={formik.errors.firstName}
          name="firstName"
          onChange={formik.handleChange}
        />
        <CustomInput
          mb={3}
          required
          value={formik.values.email}
          label="Email"
          error={!!formik.errors.email}
          errorMessage={formik.errors.email}
          name="email"
          onChange={formik.handleChange}
        />
        <Button
          isLoading={loading}
          mt={2}
          type="submit"
          data-testid="submitBtn"
          alignSelf="center"
          bg="orange.400"
          borderWidth={1}
          borderRadius={4}
          borderColor="orange.400"
          color="white"
          _hover={{
            bg: 'white',
            color: 'orange.400',
          }}
        >
          Sign Up
        </Button>
      </Flex>
      <CardFooter
        label="Already had an account"
        onClick={switchtologin}
        buttonText="Login"
      />
      <SignupModal
        defaultEmail={formik.values.email}
        defaultName={formik.values.firstName}
        onHide={() => setShowModal(false)}
        showModal={showModal}
      />
    </Flex>
  );
};
export const SignUpForm = memo(SignUpFormMemo);
