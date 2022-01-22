import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './router';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
