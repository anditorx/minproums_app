import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../../utils';

const Button = ({text, disable, onPress}) => {
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
});
