import { AsyncStorage } from 'react-native';
import axios from 'react-native-axios';

const DEVELOP_HOST = 'https://api.github.com/';
const PRODUCTION_HOST = 'https://api.github.com/';

const CURRENT_HOST = DEVELOP_HOST;

export {
  DEVELOP_HOST,
  PRODUCTION_HOST,
  CURRENT_HOST,
};


export default {
  default: {
    client: axios.create({
      baseURL: CURRENT_HOST,
      responseType: 'json',
    }),
    options: {
      returnRejectedPromiseOnError: true,
      interceptors: {
        request: [
          ({ getState }, config) => {
            return {
              ...config,
              headers: {
                ...(config.headers || {}),
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            };
          },
        ],
        response: [
          {
            success: (store, response) => { return response },
            error: (store, error) => {
              if (error.response && error.response.status === 401) {
                return AsyncStorage.multiRemove(['@minerva/user', '@minerva/token'])
                  .then(() => reset('Login'));
              }
              console.log('error', error);
              return Promise.reject(error);
            },
          },
        ],
      },
    },
  },
};
