import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { cleanup, fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { ChefAuthContext } from '../contexts/Auth';
import Login from '../layouts/login';
import theme from '../theme';

afterEach(cleanup);

describe('Login form ', () => {
  afterEach(cleanup);

  const AllTestProviders = ({ children }: any) => {
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </ThemeProvider>
    );
  };
  it.skip('with valid email and password', async () => {
    const switchToSignup = jest.fn();
    const loginFunction = jest.fn(async () => ({}));
    const {
      getByPlaceholderText,
      getByTestId,
      getByLabelText,
      getByText,
    } = render(
      <AllTestProviders>
        <ChefAuthContext.Provider
          value={{
            isLoggedIn: false,
            signup: jest.fn(),
            logout: jest.fn(),
            login: loginFunction,
            getUserId: () => 'token',

            userId: 'testid',
          }}
        >
          <Login switchToSignup={switchToSignup} />
        </ChefAuthContext.Provider>
      </AllTestProviders>,
    );
    const testUser = {
      email: 'test@test.com',
      password: 'testpassword',
    };

    await act(async () => {
      await fireEvent.change(getByLabelText(/email/i), {
        target: { value: testUser.email },
      });
      await fireEvent.change(getByLabelText(/password/i), {
        target: { value: testUser.password },
      });
      await fireEvent.click(getByTestId('submitBtn'));
    });

    expect(loginFunction).toBeCalledTimes(1);
    expect(loginFunction).toBeCalledWith(testUser.email, testUser.password);
  });
  it('with invalid email and password', async () => {
    const switchToSignup = jest.fn();
    const loginFunction = jest.fn(async () => ({}));
    const {
      getByPlaceholderText,
      getByTestId,
      getByLabelText,
      getByText,
    } = render(
      <AllTestProviders>
        <ChefAuthContext.Provider
          value={{
            userId: 'testid',
            isLoggedIn: false,
            signup: jest.fn(),
            logout: jest.fn(),
            login: loginFunction,
            getUserId: () => 'token',
          }}
        >
          <Login switchToSignup={switchToSignup} />
        </ChefAuthContext.Provider>
      </AllTestProviders>,
    );
    const testUser = {
      email: 'test@test.com',
      password: 'test',
    };

    await act(async () => {
      await fireEvent.change(getByLabelText(/email/i), {
        target: { value: testUser.email },
      });
      await fireEvent.change(getByLabelText(/password/i), {
        target: { value: testUser.password },
      });
      await fireEvent.click(getByTestId('submitBtn'));
    });

    expect(loginFunction).not.toBeCalled();
  });
});
