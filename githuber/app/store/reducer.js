import { combineReducers } from 'redux';
import login from 'login/reducers';
import repositories from 'repositories/reducers';

export default combineReducers({
  login,
  repositories,
});
