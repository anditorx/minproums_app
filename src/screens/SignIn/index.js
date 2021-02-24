import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {Colors} from '../../utils/Colors';

const SignIn = () => {
  return (
    <View style={styles.screen}>
      <Header title="Masuk" subTitle="Dapatkan produk terbaik untuk Anda" />
      <View style={styles.container}>
        <TextInput label="Email" placeholder="Masukkan Email Anda" />
        <Gap height={17} />
        <TextInput label="Password" placeholder="Masukkan Password Anda" />
        <Gap height={50} />
        <Button text="Masuk" />
        <Gap height={25} />
        <TouchableOpacity>
          <Text style={styles.textRegister}>Belum punya akun? Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  textRegister: {
    textAlign: 'center',
  },
});
