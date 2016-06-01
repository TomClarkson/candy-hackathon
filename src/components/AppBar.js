import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import ExRouter from '../ExRouter';
import DrawerLayout from 'react-native-drawer-layout';
import SidebarNav from '../components/SidebarNav';

var hamburgerIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABsCAYAAADt5bniAAAAAXNSR0IArs4c6QAAAfdJREFUeAHt3VGRAkEQREEgTsYZOZMYwci5gh1MVEVUYqB7st83e39fv5sfgZDAIzTXWAJfAQEKISogwCi/4QLUQFRAgFF+wwWogaiAAKP8hgtQA1EBAUb5DRegBqICAozyGy5ADUQFBBjlN1yAGogKCDDKb7gANRAV+Lmm/0c3MJwAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBApcD9+lTcs3IzS00InAB9rHDi1J2P9O9YnXeZ2UqAM6fufKgAO+8ys5UAZ07d+VABdt5lZisBzpy686EC7LzLzFYCnDl150MF2HmXma0EOHPqzocKsPMuM1sJcObUnQ8VYOddZrYS4MypOx8qwM67zGwlwJlTdz70fKzwr3M1WxEgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLzAudTXb/zCgBiAr4VF6M3+Aj4cyIdRAUEGOU3XIAaiAoIMMpvuAA1EBUQYJTfcAFqICogwCi/4QLUQFRAgFF+wwWogaiAAKP8hgtQA1EBAUb5DRegBqICAozyG36+FffCQIAAgUmBD4uOFLZEmC6mAAAAAElFTkSuQmCC';

export default class Appbar extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <TouchableOpacity onPress={this.props.openDrawer}>
          <Image
              style={styles.menuButton}
              source={{uri: hamburgerIcon}} />
        </TouchableOpacity>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 20, color: '#fff'}}>Dashboard</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuButton: {
	  width: 25.5,
	  height: 17.5,
    marginLeft: 20,
    marginRight: 10
	},
  navbar: {
    backgroundColor: '#222',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
