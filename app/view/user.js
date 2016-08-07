
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';


var styles = StyleSheet.create({
  topview: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ab0e6',
    height: 40
  }
});

export default class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }
  render() {
    return (
      <View style={styles.topview}>
        <View >
        </View>
        <View >
          <Text>个人信息</Text>
        </View>
      </View>
    );
  }
}
