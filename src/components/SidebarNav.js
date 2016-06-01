import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import ExRouter from '../ExRouter';

var hamburgerIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABsCAYAAADt5bniAAAAAXNSR0IArs4c6QAAAfdJREFUeAHt3VGRAkEQREEgTsYZOZMYwci5gh1MVEVUYqB7st83e39fv5sfgZDAIzTXWAJfAQEKISogwCi/4QLUQFRAgFF+wwWogaiAAKP8hgtQA1EBAUb5DRegBqICAozyGy5ADUQFBBjlN1yAGogKCDDKb7gANRAV+Lmm/0c3MJwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBApcD9+lTcs3IzS00InAB9rHDi1J2P9O9YnXeZ2UqAM6fufKgAO+8ys5UAZ07d+VABdt5lZisBzpy686EC7LzLzFYCnDl150MF2HmXma0EOHPqzocKsPMuM1sJcObUnQ8VYOddZrYS4MypOx8qwM67zGwlwJlTdz70fKzwr3M1WxEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLzAudTXb/zCgBiAr4VF6M3+Aj4cyIdRAUEGOU3XIAaiAoIMMpvuAA1EBUQYJTfcAFqICogwCi/4QLUQFRAgFF+wwWogaiAAKP8hgtQA1EBAUb5DRegBqICAozyG36+FffCQIAAgUmBD4uOFLZEmC6mAAAAAElFTkSuQmCC';

export default class SidebarNav extends React.Component {
  dashboard() {
    console.log('goto dashboard')
  }
  async logout() {
    await AsyncStorage.removeItem('user');
    const loginRoute = ExRouter.getLoginRoute();
    this.props.navigator.push(loginRoute);
  }
	render() {
		let {onToggleDraw} = this.props;

		return (
			<View style={styles.container}>
					<TouchableHighlight onPress={this.dashboard.bind(this)}>
				    	<View style={styles.linkContainer}>
				  	  		<Text style={styles.linkTitle}>Dashboard</Text>
				  	  		<Text style={styles.linkText}>View your tasks</Text>
				    	</View>
				  </TouchableHighlight>
          <TouchableHighlight onPress={this.logout.bind(this)}>
				    	<View style={styles.linkContainer}>
				  	  		<Text style={styles.linkTitle}>Logout</Text>
				    	</View>
				  </TouchableHighlight>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#f1f1f1'
	},
	linkContainer: {
		paddingTop: 15,
		paddingLeft: 15,
		paddingBottom: 15,
		borderBottomColor: '#f1f1f1',
		borderBottomWidth: 1,
		backgroundColor: '#fff'
	},
	linkTitle: {
		paddingBottom: 12,
		fontSize: 20,
		paddingTop: 0,
		fontWeight: 'bold'
	},
	linkText: {
		fontSize: 19,
		fontWeight: '300',
	}
});
