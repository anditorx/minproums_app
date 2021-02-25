import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowBackBlackSVG} from '../../../assets';
import {Fonts} from '../../../utils';
import {Colors} from '../../../utils/Colors';

const Header = ({title, subTitle, type, onPressBack, withIconBack}) => {
  return (
    <View style={styles.wrapper}>
      {withIconBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressBack}
          style={styles.wrapperIconBack}>
          <ICArrowBackBlackSVG />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIconBack: {
    backgroundColor: Colors.white,
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
  },
});
