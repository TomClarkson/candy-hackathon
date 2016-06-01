import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import ExRouter from './ExRouter';

export default class App extends Component {
  async componentDidMount() {
    var userJson = await AsyncStorage.getItem('user');
    console.log('u', userJson);
  }
  render() {
    let initialRoute = ExRouter.getLoginRoute();

    return (
      <ExNavigator
        initialRoute={initialRoute}
        showNavigationBar={false} />
    );
  }
}
