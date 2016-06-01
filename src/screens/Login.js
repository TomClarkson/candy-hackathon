import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';
import ExRouter from '../ExRouter';
import Button from '../components/Button';
import api from '../api/api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      invalid: false,
      logginIn: false
    };
  }
  changeEmail(email) {
    this.setState({email});
  }
  changePassword(password) {
    this.setState({password});
  }
  async handleLogin() {
    var {email, password, logginIn} = this.state;
    if(email && password) {
      console.log('ready to login');
      try {
        this.setState({logginIn: true});
        var result = await api.post('login', {email, password});
        this.setState({logginIn: false, invalid: false});
        await AsyncStorage.setItem('token', JSON.stringify(result.token));
        await AsyncStorage.setItem('user', JSON.stringify(result.user));

        const dashboardRoute = ExRouter.getDashboardRoute();
        this.props.navigator.push(dashboardRoute);
      } catch(e) {
        this.setState({logginIn: false, invalid: true});
      }
    }

  }
  render() {
    var {invalid, email, password, logginIn} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={this.changeEmail.bind(this)} autoCorrect={false} autoCapitalize="none" />
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={this.changePassword.bind(this)} autoCorrect={false} autoCapitalize="none" />
          {invalid &&
            <Text style={{marginBottom: 10, color: 'red'}}>Your credentials are invalid</Text>
          }
          <Button onPress={this.handleLogin.bind(this)}>
            {logginIn ? 'Login..' : 'Login'}
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputWrapper: {
    height: 300,
    width: 350,
    padding: 50,
    flexDirection: 'column'
  },
  input: {
    height: 30,
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 15,
    paddingLeft: 15
  }
});
