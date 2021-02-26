import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({authReducer, globalReducer});
export default reducer;
