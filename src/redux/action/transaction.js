import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {API_HOST} from '../../config';
import {FlashMessage, storeDataStorage} from '../../utils';
import {setLoading} from './global';
import {setDataCart, setTotalPrice} from './itemCart';

export const transactionAction = (form, token, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/transaction/addToCart`, form, {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
      FlashMessage('Success', 'Menambahkan ke keranjang', 'success');
      navigation.navigate('Order');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
    });
};

export const getItemCartAction = (form, token) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/transaction/getItemCart?invoice=${form}`, {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
      if (res.data.data !== []) {
        dispatch(setDataCart(res.data.data));
      }
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log('err getItemCartAction : ', err);
    });
};

export const addQtyAction = (form, token) => (dispatch) => {
  console.log('Tambah', form);
  console.log('token', token);
  Axios.post(`${API_HOST.url}/transaction/updateAddQty`, form, {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
    });
};
export const minQtyAction = (form, token) => (dispatch) => {
  console.log('minus', form);
  Axios.post(`${API_HOST.url}/transaction/updateMinusQty`, form, {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
    });
};

export const deleteItemCartAction = (form, invoice, token) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/transaction/deletItemOnCart`, form, {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
      FlashMessage('Berhasil', 'Item dihapus dari keranjang', 'success');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
    });
};

export const paymentAction = (invoice, token, navigation) => (dispatch) => {
  const form = {
    invoice: invoice,
  };
  Axios.post(`${API_HOST.url}/transaction/updateStatusPayment`, form, {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
    });
};
export const getTotalPrice = (invoice, token, navigation) => (dispatch) => {
  const form = {
    invoice: invoice,
  };
  Axios.post(`${API_HOST.url}/transaction/getTotalPrice`, form, {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
      console.log(res.data.data.total);
      dispatch(setTotalPrice(res.data.data.total));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
    });
};
export const paymentConfirmationAction = (invoice, token, navigation) => (
  dispatch,
) => {
  console.log('invoice', invoice);
  console.log('token', token);
  const form = {
    invoice: invoice,
  };
  Axios.post(`${API_HOST.url}/transaction/updateStatusPaymentConfirm`, form, {
    headers: {
      Authorization: token,
      // 'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      dispatch(setLoading(false));
      storeDataStorage('invoice', {
        value: null,
      });
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
    });
};
