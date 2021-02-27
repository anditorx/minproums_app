import {combineReducers} from 'redux';
import {authReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({
  authReducer,
  photoReducer,
  globalReducer,
  homeReducer,
});
export default reducer;
