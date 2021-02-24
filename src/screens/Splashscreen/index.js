import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ILLogoSVG} from '../../assets';
import {Gap} from '../../components';

const Slashscreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#1dd1a1" />
      <View
        style={{
          backgroundColor: '#1dd1a1',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ILLogoSVG />
        <Gap height={15} />
        <Text style={{fontSize: 35, color: '#020202', fontWeight: 'bold'}}>
          U-STORE
        </Text>
      </View>
    </>
  );
};

export default Slashscreen;

const styles = StyleSheet.create({});
