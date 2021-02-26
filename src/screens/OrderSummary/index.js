import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';
import {Colors} from '../../utils';

const OrderSummary = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Header
          withIconBack
          onPressBack={() => navigation.goBack()}
          title="Pesanan"
          subTitle="Ringkasan pesanan Anda"
        />
      </View>
    </>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
