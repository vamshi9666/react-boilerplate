import { Flex, Text } from '@chakra-ui/core';
import React, { memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Left = memo(function Left() {
  return (
    <Flex
      flex={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg"> NEAR YOU</Text>
    </Flex>
  );
});

const Right = memo(function Right() {
  return <Text>Right</Text>;
});
const HomeScreen: React.FC = () => {
  const history = useHistory();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      history.push('/dashboard');
    }
  }, [isLoggedIn, history]);
  return (
    <Flex m={2} justifyContent="space-around" flexDirection="row">
      <Left />
      <Right />
    </Flex>
  );
};

export default HomeScreen;
