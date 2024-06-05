/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import store from './stores';
import {
  SafeAreaView,
} from 'react-native';
import { Provider, } from 'react-redux';
import { Application } from './Application';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView >
        <Application />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
