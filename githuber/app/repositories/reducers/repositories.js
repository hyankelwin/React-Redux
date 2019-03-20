import types from 'repositories/types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function repositories(state = INITIAL_STATE, { type, ...action }) {
  if (types.REPOSITORIES_REQUEST === type) {
      return {
        ...state,
        loading: true,
      };
  }
  if (types.REPOSITORIES_REQUEST_SUCCESS === type) {
    return {
      ...state,
      error: false,
      loading: false,
      data:  action.payload.data,
    };
  }
  if (types.REPOSITORIES_REQUEST_FAILURE === type) {
    return { ...state, error: true, loading: false };
  };

  return state;
}

