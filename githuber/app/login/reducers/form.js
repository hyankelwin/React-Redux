import types from 'login/types';

const INITIAL_STATE = {
  username: null,
  loading: false,
  error: false,
  data: []
};

export default function login(state = INITIAL_STATE, { type, ...action }) {
  if (types.LOGIN_REQUEST === type) {
      return {
        ...state,
        loading: true,
      };
  }
  if (types.LOGIN_REQUEST_SUCCESS === type) {
    return {
      ...state,
      data: action.payload.data,
      error: false,
      loading: false,
    };
  }
  if (types.LOGIN_REQUEST_FAIL === type) {
    return { ...state, error: true, loading: false };
  };

    return state;
}
