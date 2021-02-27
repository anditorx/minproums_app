import Axios from 'axios';
import {UrlAPI} from '../../config';
import {FlashMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const registerAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${UrlAPI}/register`, dataRegister)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const resDataUser = res.data.data.user;
      storeData('userProfile', resDataUser);
      storeData('token', {
        value: token,
      });
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);

        Axios.post(`${UrlAPI}/user/photo`, photoForUpload, {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        }).catch((err) => {
          FlashMessage('Oops!', 'Upload photo tidak berhasil');
        });
      }
      dispatch(setLoading(false));
      navigation.replace('SuccessSignUp');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      FlashMessage('Gagal', 'Register gagal!');
    });
};
