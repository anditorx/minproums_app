import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {Colors, Fonts} from '../../../utils';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: Fonts.regularPoppins,
    color: Colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.greyLight,
    borderRadius: 10,
    padding: 10,
  },
});
