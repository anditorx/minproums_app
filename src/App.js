import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {FlashMessage} from './utils';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Router />
        </Provider>
        {/* <FlashMessage position="bottom" /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
