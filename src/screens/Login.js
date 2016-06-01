import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ExRouter from '../ExRouter';

export default class Login extends Component {
  go() {
    const dashboardRoute = ExRouter.getDashboardRoute();
    this.props.navigator.push(dashboardRoute);
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this.go.bind(this)}><Text>Login!</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
