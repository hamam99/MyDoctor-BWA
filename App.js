import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';
import { Loading } from './src/pages';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import { YellowBox } from 'react-native';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  YellowBox.ignoreWarnings(['Setting a timer']);

  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
      </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  );
};

export default App;
