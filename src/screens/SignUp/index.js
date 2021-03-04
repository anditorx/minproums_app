import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {Colors, FlashMessage, Fonts, useForm} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ILNoProfilePictPNG} from '../../assets';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    email: '',
    name: '',
    password: '',
    // password_confirmation: '',
  });

  const onPressSubmit = () => {
    // console.log('form : ', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };

  const addPhotoFromGallery = () => {
    launchImageLibrary(
      {
        quality: 0.4,
        maxWidth: 200,
        maxHeight: 200,
      },
      (response) => {
        if (response.didCancel || response.error) {
          FlashMessage('Oops!', 'You are cancelled select a photo.');
        } else {
          const source = {uri: response.uri};
          const dataImg = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          setPhoto(source);
          dispatch({type: 'SET_PHOTO', value: dataImg});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Header
          withIconBack
          onPressBack={() => navigation.goBack()}
          title="Daftar"
          subTitle="Buat akun Anda"
        />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.photo}>
            <TouchableOpacity
              style={styles.borderPhoto}
              onPress={addPhotoFromGallery}>
              {photo !== '' ? (
                <Image
                  source={userProfile.profile_photo_path}
                  style={styles.photoWrapper}
                />
              ) : (
                // <Image
                //   source={ILNoProfilePictPNG}
                //   style={styles.photoWrapper}
                // />
                <View style={styles.photoWrapper}>
                  <Text style={styles.txtAddPhoto}>Add Foto</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <TextInput
            label="Nama"
            placeholder="Masukkan Nama Anda"
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={17} />
          <TextInput
            label="Email"
            placeholder="Masukkan Email Anda"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={17} />
          <TextInput
            label="Password"
            placeholder="Masukkan Password Anda"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />
          {form.password.length < 6 && (
            <Text style={styles.noteForPassword}>
              *password minimal 6 karakter
            </Text>
          )}
          <Gap height={30} />
          {form.email !== '' &&
          form.name !== '' &&
          form.password !== '' &&
          form.password.length > 5 ? (
            <Button text="Lanjut" onPress={onPressSubmit} />
          ) : (
            <Button text="Lanjut" disable />
          )}
          <Gap height={50} />
        </ScrollView>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    // marginTop: 24,
    flex: 1,
  },
  textRegister: {
    textAlign: 'center',
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: Colors.greyLight2,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoWrapper: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    backgroundColor: Colors.greyLight,
    // padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAddPhoto: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.black,
    textAlign: 'center',
  },
  noteForPassword: {
    fontSize: 12,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
  },
});
