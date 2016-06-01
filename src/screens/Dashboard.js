import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ExRouter from '../ExRouter';
import DrawerLayout from 'react-native-drawer-layout';
import SidebarNav from '../components/SidebarNav';

export default class Dashboard extends Component {
  openDrawer() {
    this.drawer.openDrawer();
  }
  closeDrawer() {
    this.drawer.closeDrawer();
  }
  go() {
    const dashboardRoute = ExRouter.getDashboardRoute();
    this.props.navigator.push(dashboardRoute);
  }
  render() {
    var {navigator} = this.props;

    return (
      <DrawerLayout
        ref={(drawer) => { return this.drawer = drawer }}
        drawerWidth={310}
        renderNavigationView={() => <SidebarNav navigator={navigator} onToggleDraw={this.closeDrawer.bind(this)} />}>
        <View style={styles.container}>
            <TouchableOpacity onPress={this.go.bind(this)}><Text>!!Dashboard!</Text></TouchableOpacity>
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
    backgroundColor: 'pink',
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
