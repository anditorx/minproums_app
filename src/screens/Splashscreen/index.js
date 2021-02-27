import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILLogoSVG} from '../../assets';
import {Gap} from '../../components';
import {Colors, Fonts, getDataStorage} from '../../utils';

const Slashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getDataStorage('token').then((res) => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <View
        style={{
          backgroundColor: Colors.primary,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ILLogoSVG />
        <Gap height={15} />
        <Text
          style={{
            fontSize: 35,
            color: Colors.black,
            fontFamily: Fonts.boldPoppins,
          }}>
          USTORE
        </Text>
      </View>
    </>
  );
};

export default Slashscreen;

const styles = StyleSheet.create({});
