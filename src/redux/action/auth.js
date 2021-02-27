import Axios from 'axios';
import {API_HOST} from '../../config';
import {FlashMessage, storeDataStorage} from '../../utils';
import {setLoading} from './global';

export const registerAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const resDataUser = res.data.data.user;
      storeDataStorage('token', {
        value: token,
      });
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);

        Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((res) => {
            resDataUser.profile_photo_url = `${API_HOST.url}/storage/${res.data.data[1]}`;
            storeDataStorage('userProfile', resDataUser);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          })
          .catch((err) => {
            FlashMessage('Oops!', 'Upload photo tidak berhasil');
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          });
      } else {
        storeDataStorage('userProfile', resDataUser);
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      }
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      FlashMessage('Gagal', 'Register gagal!');
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  console.log(form);
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const resDataUser = res.data.data.user;
      dispatch(setLoading(false));
      storeDataStorage('token', {
        value: token,
      });
      storeDataStorage('userProfile', resDataUser);
      FlashMessage('Berhasil', 'Berhasil masuk ke aplikasi', 'success');
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      console.log('erorSignin : ', JSON.stringify(err));
      dispatch(setLoading(false));
      FlashMessage('Gagal', 'Register gagal!');
    });
};
