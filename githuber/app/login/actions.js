import * as Navigator from 'services/navigator';
import types from 'login/types';

export function makeLogin(username) {
  return (dispatch) => {
    return dispatch({
        type: types.LOGIN_REQUEST,
        payload: {
          request: {
            url: `users/${username}`,
            method: 'GET',
          },
        },
      })
      .then(() => Navigator.reset('Repositories'))
      .catch((error) => {
        dispatch(error)
      });
  };
}
