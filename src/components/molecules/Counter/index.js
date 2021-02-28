import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ICCounterAdd, ICCounterMin} from '../../../assets';
import {
  addQtyAction,
  deleteItemCartAction,
  getItemCartAction,
  minQtyAction,
} from '../../../redux/action';
import {Colors, Fonts} from '../../../utils';

const Counter = ({onValueChange, type, val, item, invoice, token}) => {
  const [value, setValue] = useState(val);
  const dispatch = useDispatch();

  useEffect(() => {
    onValueChange(value);
  }, []);

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

  const onCountCart = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
      dispatch(addQtyAction(item, token));
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
        dispatch(minQtyAction(item, token));
      } else {
        dispatch(deleteItemCartAction(item, invoice, token));
        dispatch(getItemCartAction(invoice, token));
      }
    }
    setValue(result);
    onValueChange(result);
  };

  if (type == 'counter-cart') {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onCountCart('minus')}>
          <ICCounterMin />
        </TouchableOpacity>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity onPress={() => onCountCart('plus')}>
          <ICCounterAdd />
        </TouchableOpacity>
      </View>
    );
  }

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
