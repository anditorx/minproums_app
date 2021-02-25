import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILSuccessSignUpSVG} from '../../assets';
import {Button, Gap} from '../../components';
import {Colors, Fonts} from '../../utils';

const SuccessSignUp = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Text style={styles.txt}>Yeay! Berhasil!</Text>
        <Gap height={20} />
        <View style={styles.illustration}>
          <ILSuccessSignUpSVG />
        </View>
        <Gap height={40} />
        <View style={styles.wrappingBtn}>
          <Button text="Lanjutkan" />
        </View>
      </View>
    </>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  illustration: {
    alignItems: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: Fonts.boldPoppins,
  },
  wrappingBtn: {
    paddingHorizontal: 50,
  },
});
