import Axios from 'axios';
import {API_HOST} from '../../config';
import {setLoading} from './global';

export const getDataProduct = () => (dispatch) => {
  Axios.get(`${API_HOST.url}/product`)
    .then((res) => {
      // console.log('respon success : ', res.data.data.data);
      dispatch({type: 'SET_PRODUCT', value: res.data.data.data});
    })
    .catch((err) => {
      console.log('responErr : ', res);
    });
};
export const getDataProductByCategory = (category, limit) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/product?category=${category}&limit=${limit}`)
    .then((res) => {
      // console.log('respon success : ', res.data.data.data);
      if (category === 'atk') {
        dispatch({type: 'SET_PRODUCT_ATK', value: res.data.data.data});
      }
      if (category === 'rt') {
        dispatch({type: 'SET_PRODUCT_RUMAH_TANGGA', value: res.data.data.data});
      }
      if (category === 'elektronik') {
        dispatch({type: 'SET_PRODUCT_ELEKTRONIK', value: res.data.data.data});
      }
      if (category === 'masak') {
        dispatch({type: 'SET_PRODUCT_MASAK', value: res.data.data.data});
      }
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log('responErr : ', res);
    });
};
