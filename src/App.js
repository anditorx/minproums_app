import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Router />
        </Provider>
        <FlashMessage position="top" />
      </NavigationContainer>
    </>
  );
};

export default App;
