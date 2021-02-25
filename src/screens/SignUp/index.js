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
import {Colors, Fonts} from '../../utils';

const SignUp = ({navigation}) => {
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
        <ScrollView style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity style={styles.borderPhoto}>
              <View style={styles.photoWrapper}>
                <Text style={styles.txtAddPhoto}>Add Foto</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TextInput label="Nama" placeholder="Masukkan Nama Anda" />
          <Gap height={17} />
          <TextInput label="Email" placeholder="Masukkan Email Anda" />
          <Gap height={17} />
          <TextInput label="Password" placeholder="Masukkan Password Anda" />
          <Gap height={17} />
          <TextInput
            label="Konfirmasi Password"
            placeholder="Konfirmasi Password Anda"
          />
          <Gap height={30} />
          <Button
            text="Lanjut"
            onPress={() => navigation.replace('SignUpAddress')}
          />
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
});
