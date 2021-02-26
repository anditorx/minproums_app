import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICCartWhite} from '../../../assets';
import {Colors, Fonts} from '../../../utils';

const Button = ({text, disable, onPress, type}) => {
  if (type === 'shopping-cart') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.wrapperBtnCart}>
        <ICCartWhite />
      </TouchableOpacity>
    );
  }

  if (disable) {
    return (
      <View style={styles.wrapper(disable)}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper(disable)}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: (disable) => ({
    backgroundColor: disable ? Colors.greyLight : Colors.primary,
    padding: 12,
    borderRadius: 12,
  }),
  text: {
    fontSize: 16,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
    textAlign: 'center',
  },
  textForCart: {
    fontSize: 13,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
    textAlign: 'center',
  },
  wrapperBtnCart: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
