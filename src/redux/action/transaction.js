import Axios from 'axios';
import {API_HOST} from '../../config';
import {FlashMessage, storeDataStorage} from '../../utils';
import {setLoading} from './global';

export const transactionAction = (form) => (dispatch) => {
  console.log(form);
};
