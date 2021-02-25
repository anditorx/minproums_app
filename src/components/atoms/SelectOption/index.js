import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Colors, Fonts} from '../../../utils';

const SelectOption = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({language: itemValue})
        // }
        >
          <Picker.Item label="Pria" value="male" />
          <Picker.Item label="Wanita" value="female" />
        </Picker>
      </View>
    </View>
  );
};

export default SelectOption;

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
    padding: 1,
  },
});
