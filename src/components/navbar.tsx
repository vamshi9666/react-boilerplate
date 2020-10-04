/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PseudoBox,
  Text,
} from '@chakra-ui/core';
import React, { FC, memo, useMemo } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import { LIGHT_ORANGE } from '../styles/colors';

type NavObject = {
  label: string;
  value: string;
};

const navConfig: Array<NavObject> = [
  { label: 'ORDERS', value: 'dashboard' },
  { label: 'DISHES', value: 'dishes' },
];
const NavBar: React.FC = () => {
  const { userId } = useAuth();

  const history = useHistory();

  return (
    <>
      <Flex
        as="nav"
        boxShadow="md"
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        style={{
          zIndex: 10000,
          borderStyle: 'solid',
          borderWidth: 0,
          borderBottomWidth: 2,
          borderColor: LIGHT_ORANGE,
        }}
      >
        <Flex alignItems="center">
          <PseudoBox
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Text onClick={() => history.push('/')} style={{ marginRight: 64 }}>
              BRAND
            </Text>
          </PseudoBox>
          {navConfig.map((navObj) => (
            <NavItem
              key={navObj.value}
              label={navObj.label}
              value={navObj.value}
            />
          ))}
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end" marginLeft="auto">
          <Button
            bg="blue.500"
            borderWidth={1}
            borderColor="blue.500"
            color="white"
            _hover={{
              color: 'blue.500',
              bg: 'white',
            }}
            mr={4}
            onClick={() => setModalVisible(true)}
          >
            Add
          </Button>

          <Menu>
            <MenuButton>
              <FaRegUserCircle size={30} data-testid="chefProfileIcon" />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  history.push('/profile/info');
                }}
              >
                My Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push('/profile/menu');
                }}
              >
                My Menu
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setIsLogoutOpen(true);
                }}
              >
                Logout
              </MenuItem>
              <MenuItem>Help</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
};
interface NavItemProps {
  label: string;
  value: string;
}

const NavItemMemo = (props: NavItemProps) => {
  const { label, value } = props;
  const location = useLocation();
  const history = useHistory();
  const isActive = useMemo(() => {
    const path = location.pathname.split('/')[1];
    return path === value;
  }, [location, value]);
  return (
    <PseudoBox
      onClick={() => history.push(`/${value}`)}
      mr={2}
      p={3}
      py={5}
      color={isActive ? 'orange.300' : 'gray.600'}
      textDecoration={isActive ? 'underline' : 'none'}
      _hover={{
        backgroundColor: 'orange.300',
        cursor: 'pointer',
        color: 'white',
      }}
    >
      {label}
    </PseudoBox>
  );
};

export const NavItem: FC<NavItemProps> = memo(NavItemMemo);

export default NavBar;
