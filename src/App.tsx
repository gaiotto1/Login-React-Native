import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import store from './store';
import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <StatusBar translucent backgroundColor="transparent" />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    <FlashMessage position="top" />
  </Provider>
);

export default App;
