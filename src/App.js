import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Image,
  Animated
} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import ExRouter from './ExRouter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  async componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();

    var userJson = await AsyncStorage.getItem('user');
    var user = JSON.parse(userJson);
    if(user) {

    } else {

    }

  }
  render() {
    let initialRoute = ExRouter.getSplashRoute();

    return (
      <ExNavigator
        initialRoute={initialRoute}
        showNavigationBar={false} />
    );
  }
}
