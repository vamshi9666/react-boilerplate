/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const SIGNUP_URL = 'https://dev-sapor.auth0.com/dbconnections/signup';

type SignupFields = {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone?: number;
  password: string;
};

const testData: SignupFields = {
  firstName: 'vamshi',
  lastName: 'krishna',
  dob: '1998-12-04',
  email: 'vamshi@test.com',
  phone: 123456789,
  password: '12345678',
};
export const __signup = async (fields: SignupFields) => {
  try {
    const data = {
      //   ...fields,
      ...testData,
      connection: 'database',
    };
    const response = await axios({
      url: SIGNUP_URL,
      data,
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

type LoginFields = {
  email: string;
  password: string;
};

export const __login = (fields: LoginFields) => true;
