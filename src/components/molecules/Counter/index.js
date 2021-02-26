import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICCounterAdd, ICCounterMin} from '../../../assets';
import {Colors, Fonts} from '../../../utils';

const Counter = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <ICCounterMin />
      </TouchableOpacity>
      <Text style={styles.value}>1</Text>
      <TouchableOpacity>
        <ICCounterAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: Fonts.regularPoppins,
    color: Colors.black,
    marginHorizontal: 15,
  },
});
