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
import ExRouter from '../ExRouter';

export default class Splash extends Component {
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
    var nextRoute = user ?
      ExRouter.getDashboardRoute() :
      ExRouter.getLoginRoute();

    setTimeout(() => {
      this.props.navigator.push(nextRoute);
    }, 1000);

  }
  render() {
    let initialRoute = ExRouter.getLoginRoute();

    return (
      <View style={{backgroundColor: '#222', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Image                         // Base: Image, Text, View
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
          style={{
            height: 300,
            width: 300,
            transform: [                        // `transform` is an ordered array
              {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
            ]
          }}
        />
        <Text style={{fontSize: 26, color: '#fff'}}>React Customer Manager</Text>
      </View>
    );

    return (
      <ExNavigator
        initialRoute={initialRoute}
        showNavigationBar={false} />
    );
  }
}
