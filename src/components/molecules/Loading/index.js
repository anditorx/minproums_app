import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Colors, Fonts} from '../../../utils';
import {Gap} from '../../atoms';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={'large'} color={Colors.primary} />
      <Gap height={20} />
      <Text style={styles.txtLoading}>Loading ...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.loadingBackground,
    width: '100%',
    height: '100%',
  },
  txtLoading: {
    color: Colors.primary,
    fontFamily: Fonts.regularPoppins,
    fontSize: 20,
  },
});
