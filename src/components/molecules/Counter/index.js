import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICCounterAdd, ICCounterMin} from '../../../assets';
import {Colors, Fonts} from '../../../utils';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  // useEffect(() => {
  //   onValueChange(value);
  // }, []);

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <ICCounterMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
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
