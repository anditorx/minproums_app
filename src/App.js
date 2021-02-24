import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SignIn, Splashscreen} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Splashscreen /> */}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;
