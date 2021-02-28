import {combineReducers} from 'redux';
import {authReducer, photoReducer, tokenReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {itemCartReducer, totalPriceReducer} from './transaction';

const reducer = combineReducers({
  authReducer,
  photoReducer,
  tokenReducer,
  globalReducer,
  homeReducer,
  itemCartReducer,
  totalPriceReducer,
});
export default reducer;
