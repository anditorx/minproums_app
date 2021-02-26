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
import {Colors, FlashMessage, Fonts, useForm} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    gender: '',
    address: '',
    phone_number: '',
    city: '',
  });
  const registerState = useSelector((state) => state.registerReducer);
  const dispatch = useDispatch();

  const onPressSubmit = () => {
    const dataUser = {
      ...form,
      ...registerState,
    };
    console.log('Data Register : ', dataUser);
    Axios.post('http://192.168.1.9:8000/api/register', dataUser)
      .then((res) => {
        console.log('signup success : ', res.data);
        FlashMessage('Sukses', 'Register berhasil!', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch((err) => {
        console.log('sugnup error : ', JSON.stringify(err));
        FlashMessage('Gagal', 'Register gagal!');
      });
  };

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
          <SelectOption
            label="Jenis Kelamin"
            value={form.gender}
            onSelectChange={(value) => setForm('gender', value)}
          />
          <Gap height={17} />
          <TextInput
            label="Alamat"
            placeholder="Masukkan Alamat Anda"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={17} />
          <TextInput
            label="No. Handphone"
            placeholder="Masukkan No. Handphone Anda"
            keyboardType="numeric"
            value={form.phone_number}
            onChangeText={(value) => setForm('phone_number', value)}
          />
          <Gap height={17} />
          <SelectOption
            type="select-city"
            label="Kota"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={30} />
          {form.gender !== '' &&
          form.address !== '' &&
          form.phone_number !== '' &&
          form.city !== '' ? (
            <Button text="Daftar" onPress={onPressSubmit} />
          ) : (
            <Button text="Daftar" disable />
          )}
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
