import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Colors, Fonts} from '../../../utils';

const SelectOption = ({label, type, value, onSelectChange}) => {
  if (type == 'select-city') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.input}>
          <Picker
            // prompt="- Pilih Kota -"
            selectedValue={value}
            onValueChange={(itemValue) => onSelectChange(itemValue)}>
            <Picker.Item label="- Pilih Kota -" value="" />
            <Picker.Item label="JAK-PUS" value="jak-pus" />
            <Picker.Item label="JAK-SEL" value="jak-sel" />
            <Picker.Item label="JAK-UT" value="jak-ut" />
            <Picker.Item label="JAK-BAR" value="jak-bar" />
            <Picker.Item label="JAK-TIM" value="jak-tim" />
          </Picker>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}>
          <Picker.Item label="- Pilih Jenis Kelamin" value="" />
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
