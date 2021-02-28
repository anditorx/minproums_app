import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {Colors, Fonts} from '../../../utils';

const TextInput = ({label, placeholder, type, ...props}) => {
  if (type === 'textarea') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInputRN
          numberOfLines={5}
          multiline={true}
          style={styles.inputTextArea}
          placeholder={placeholder}
          {...props}
        />
      </View>
    );
  }

  if (type === 'textinput-item-cart') {
    return (
      <View>
        <TextInputRN
          style={styles.input}
          placeholder={placeholder}
          {...props}
        />
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} {...props} />
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
  inputTextArea: {
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.greyLight,
    borderRadius: 10,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
});
