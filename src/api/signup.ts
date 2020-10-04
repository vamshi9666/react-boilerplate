/* eslint-disable camelcase */
import Axios from 'axios';
import { SERVERLESS_FUNCTIONS_ENDPOINT_SIGNUP } from '../config/api';

export type SignupFields = {
  first_name: string;
  last_name: string;
  dob: Date;
  email: string;
  phone?: BigInt;
  password: string;
  image: string | null;
};

const signup = ({
  first_name,
  last_name,
  email,
  phone,
  dob,
  password,
  image,
}: SignupFields) =>
  Axios.get(SERVERLESS_FUNCTIONS_ENDPOINT_SIGNUP, {
    params: {
      first_name,
      last_name,
      email,
      phone,
      dob,
      password,
      image,
    },
  });
export default signup;
