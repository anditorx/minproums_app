import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {ICArrowBackBlackSVG, ILNoProfilePictPNG} from '../../../assets';
import {Fonts, getData} from '../../../utils';
import {Colors} from '../../../utils/Colors';

const Header = ({title, subTitle, type, onPressBack, withIconBack}) => {
  const [photo, setPhoto] = useState(ILNoProfilePictPNG);
  useEffect(() => {
    getData('userProfile').then((res) => {
      console.log('userProfile : ', res);
      setPhoto({uri: res.profile_photo_url});
    });
  }, []);

  if (type === 'header-homescreen') {
    return (
      <View style={styles.profileWrapper}>
        <View>
          <Text style={styles.appName}>USTORE</Text>
          <Text style={styles.textWelcome}>Selamat datang di Toko kami</Text>
        </View>
        <TouchableOpacity>
          <Image source={photo} style={styles.profile} />
        </TouchableOpacity>
      </View>
    );
  }
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
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: Colors.white,
  },
  appName: {
    fontSize: 24,
    fontFamily: Fonts.boldPoppins,
    color: Colors.black,
  },
  textWelcome: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
