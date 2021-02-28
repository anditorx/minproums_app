import {combineReducers} from 'redux';
import {authReducer, photoReducer, invoiceReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({
  authReducer,
  photoReducer,
  globalReducer,
  homeReducer,
  invoiceReducer,
});
export default reducer;
