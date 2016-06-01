import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  LinkingIOS
} from 'react-native';
import ExRouter from '../ExRouter';
import DrawerLayout from 'react-native-drawer-layout';
import SidebarNav from '../components/SidebarNav';
import Appbar from '../components/AppBar';
import Button from '../components/Button';

export default class Dashboard extends Component {
  openDrawer() {
    this.drawer.openDrawer();
  }
  closeDrawer() {
    this.drawer.closeDrawer();
  }
  async call() {
    var number = 'tel:9876543210';
    Linking.openURL(number);
  }
  render() {
    var {navigator} = this.props;

    return (
      <DrawerLayout
        ref={(drawer) => { return this.drawer = drawer }}
        drawerWidth={310}
        renderNavigationView={() => <SidebarNav navigator={navigator} onToggleDraw={this.closeDrawer.bind(this)} />}>
        <Appbar openDrawer={this.openDrawer.bind(this)} />
        <View style={styles.container}>
          <Text style={{marginBottom: 10}}>Call react hacker man</Text>
          <Button onPress={this.call.bind(this)}>9876543210</Button>
        </View>
      </DrawerLayout>
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
  menuButton: {
	  width: 25.5,
	  height: 17.5,
	},
  navbar: {
    backgroundColor: '#222',
    height: 70
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
