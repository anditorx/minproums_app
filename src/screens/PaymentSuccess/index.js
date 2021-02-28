import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILSuccessPaymentSVG, ILSuccessSignUpSVG} from '../../assets';
import {Button, Gap} from '../../components';
import {Colors, Fonts} from '../../utils';

const PaymentSuccess = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Text style={styles.txt}>Yeay! Berhasil!</Text>
        <Gap height={20} />
        <View style={styles.illustration}>
          <ILSuccessPaymentSVG />
        </View>
        <Gap height={40} />
        <View style={styles.wrappingBtn}>
          <Button
            text="Lanjut"
            onPress={() =>
              navigation.reset({index: 0, routes: [{name: 'SignIn'}]})
            }
          />
        </View>
      </View>
    </>
  );
};

export default PaymentSuccess;

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
  txt2: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.mediumPoppins,
  },
  wrappingBtn: {
    paddingHorizontal: 50,
  },
});
