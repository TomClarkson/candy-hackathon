import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import ExRouter from './ExRouter';

export default class App extends Component {
  render() {
    let initialRoute = ExRouter.getLoginRoute();

    return (
      <ExNavigator
        initialRoute={initialRoute}
        showNavigationBar={false} />
    );
  }
}
