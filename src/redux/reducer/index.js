import {combineReducers} from 'redux';
import {authReducer, photoReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({authReducer, photoReducer, globalReducer});
export default reducer;
