import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, SelectOption, TextInput} from '../../components';
import {Colors, Fonts} from '../../utils';

const SignUpAddress = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Header
          withIconBack
          onPressBack={() => navigation.goBack()}
          title="Alamat"
          subTitle="Lengkapi data diri Anda"
        />
        <ScrollView style={styles.container}>
          {/* <TextInput label="Jenis Kelamin" placeholder="Masukkan Nama Anda" /> */}
          <SelectOption label="Jenis Kelamin" />
          <Gap height={17} />
          <TextInput label="Alamat" placeholder="Masukkan Alamat Anda" />
          <Gap height={17} />
          <TextInput
            label="No. Handphone"
            placeholder="Masukkan No. Handphone Anda"
          />
          <Gap height={17} />
          {/* <TextInput label="Kota" placeholder="Kota" /> */}
          <SelectOption label="Kota" />
          <Gap height={30} />
          <Button
            text="Daftar"
            onPress={() => navigation.replace('SuccessSignUp')}
          />
          <Gap height={50} />
        </ScrollView>
      </View>
    </>
  );
};

export default SignUpAddress;

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
});
