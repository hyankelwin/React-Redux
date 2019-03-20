import types from './types';

export function loadRepositoriesRequest(username) {
  return (dispatch) => {
    return dispatch({
        type: types.REPOSITORIES_REQUEST,
        payload: {
          request: {
            url: `users/${username}/repos`,
            method: 'GET',
          },
        },
      })
      .then((response) => response)
      .catch((error) => {
        dispatch(error)
      });
  };
}
