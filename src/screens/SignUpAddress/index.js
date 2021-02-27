import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, SelectOption, TextInput} from '../../components';
import {Colors, useForm} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {registerAction, setLoading} from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    gender: '',
    address: '',
    phone_number: '',
    city: '',
  });
  const dispatch = useDispatch();
  const {authReducer, photoReducer} = useSelector((state) => state);
  const onPressSubmit = () => {
    const dataUser = {
      ...form,
      ...authReducer,
    };
    dispatch(setLoading(true));
    dispatch(registerAction(dataUser, photoReducer, navigation));
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
