/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import { SafeAreaView } from "react-native";

import QrgeneratorPage from "./pages/qr/generate/qr.genarator.page";

const App = () => {
  return (
    <SafeAreaView>
      <QrgeneratorPage />
    </SafeAreaView>
  );
};

export default App;
