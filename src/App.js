import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {FlashMessage} from './utils';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
        {/* <FlashMessage position="bottom" /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
