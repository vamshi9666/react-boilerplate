import Axios from 'axios';
import { SERVERLESS_FUNCTIONS_ENDPOINT_LOGIN } from '../config/api';

function login(email: string, password: string): Promise<any> {
  return Axios.get(SERVERLESS_FUNCTIONS_ENDPOINT_LOGIN, {
    params: {
      email,
      password,
    },
  });
}

export default login;
