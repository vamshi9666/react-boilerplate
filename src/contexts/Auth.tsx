/* eslint-disable camelcase */
import jwtDecode from 'jwt-decode';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import loginApi from '../api/login';
import signupApi, { SignupFields } from '../api/signup';
import { AUTH_TOKEN } from '../common/constants';

type AuthDataType = {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<any>;
  signup: (data: SignupFields) => Promise<any>;
  logout: () => Promise<any>;
  userId: string;
  getUserId: () => string;
};

export const NOOP = () => ({});
const defaultData: AuthDataType = {
  isLoggedIn: false,
  login: async () => null,
  signup: async () => null,
  logout: async () => null,
  userId: '',
  getUserId: () => '',
};

export interface ContextProviderProps {
  children: ReactNode;
  defaultValue?: boolean;
}

// type ChefAuthContextType = {
//   isLoggedIn: boolean;
//   userId: '';
//   login: () => Promise<void>;
//   getUserId: () => string;
//   logout: () => Promise<any>;
// };
export const AuthContext = createContext<AuthDataType>(defaultData);

const getIdFromToken = (tokenName: string) => {
  const token = localStorage.getItem(tokenName);
  if (!token) return null;
  const body: any = jwtDecode(token);
  return body['https://hasura.io/jwt/claims']['x-hasura-user-id'];
};

export const AuthProvider = ({
  children,
  defaultValue,
}: ContextProviderProps) => {
  // const [_, setToast] = useToasts();
  // const [userId, setUserId] = useState(getIdFromToken(AUTH_TOKEN));
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem(AUTH_TOKEN));
  // const { data, loading, error, refetch } = useGetChefWithIdQuery({
  //   variables: {
  //     id: getIdFromToken(AUTH_TOKEN),
  //   },
  // });
  // useEffect(() => {
  //   if (loggedIn) {
  //     const token = localStorage.getItem(AUTH_TOKEN);
  //     if (token) {
  //       // const obj = jwtDecode(token);
  //       // console.log(' obj is ', obj);
  //       // refetch({
  //       //   id: getIdFromToken(AUTH_TOKEN),
  //       // });
  //       // setLoggedChef(obj);
  //     }
  //   }
  // }, [loggedIn]);

  const login = (email: string, password: string) =>
    new Promise((resolve, reject) => {
      loginApi(email, password)
        .then((res) => {
          console.log('test data :login', res);
          const { token } = res.data;
          if (!token) {
            alert(' went wrong during login . please try again');
            return;
          }
          localStorage.setItem(AUTH_TOKEN, token);
          setLoggedIn(true);
          resolve(true);
        })
        .catch((err) => {
          console.log('maer', Object.keys(err.response));
          reject(err);
        });
    });
  const signup = (args: SignupFields) =>
    new Promise((resolve, reject) => {
      signupApi(args)
        .then((res) => {
          const { token } = res.data;
          if (token) {
            setLoggedIn(true);

            localStorage.setItem(AUTH_TOKEN, token);
          }
          resolve(null);
        })
        .catch((err) => {
          reject(err);
        });
    });
  const logout = async () => {
    localStorage.removeItem(AUTH_TOKEN);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: defaultValue || loggedIn || false,
        userId: getIdFromToken(AUTH_TOKEN),
        getUserId: () => getIdFromToken(AUTH_TOKEN),
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {
  defaultValue: false,
};
export const useAuth = () => useContext(AuthContext);
