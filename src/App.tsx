/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {
  SafeAreaView,
} from 'react-native';

import QrScannerPage from './pages/qr/generate/qr.scanner.page';

const App = () => {
  return (
    <SafeAreaView>
      <QrScannerPage />
    </SafeAreaView>
  );
};

export default App;
