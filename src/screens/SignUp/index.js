import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {Colors, Fonts, useForm} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';

const SignUp = ({navigation}) => {
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
            <TouchableOpacity style={styles.borderPhoto}>
              <View style={styles.photoWrapper}>
                <Text style={styles.txtAddPhoto}>Add Foto</Text>
              </View>
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
    borderRadius: 90,
    backgroundColor: Colors.greyLight,
    padding: 24,
  },
  txtAddPhoto: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
    textAlign: 'center',
  },
  noteForPassword: {
    fontSize: 12,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
  },
});
