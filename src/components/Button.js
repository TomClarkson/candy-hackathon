import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
				  <Text style={styles.whiteFont}>{this.props.children}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 8
  },
  whiteFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
