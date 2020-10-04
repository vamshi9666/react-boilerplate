import { Box, Flex } from '@chakra-ui/core';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { NavItem } from './navbar';

const navByttons = [
  { label: 'SEARCH', value: 'order' },
  { label: 'JOIN ', value: 'signup' },
];
const UnAuthNav: React.FC = () => {
  const history = useHistory();
  return (
    <Flex as="nav" width="100vw" shadow="md" alignItems="center" pl={3}>
      <Link to="/">BRAND</Link>

      <Flex ml={32}>
        {navByttons.map((i) => (
          <NavItem key={i.value} label={i.label} value={i.value} />
        ))}
      </Flex>

      <Box
        ml="auto"
        mr={8}
        onClick={() => {
          history.push('/cart');
        }}
      >
        {/* {cartItems.length !== 0 && (
          <Tag
            borderRadius="50%"
            size="sm"
            color="white"
            bg="red.500"
            position="absolute"
            width="10px"
            height="10px"
            rounded="full"
            marginTop="-20px"
          >
            {cartItems.length}
          </Tag>
        )} */}
        <FaShoppingCart />
      </Box>
    </Flex>
  );
};
export default UnAuthNav;
