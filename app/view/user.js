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
  return:{

  }
})

export default class User {
  constructor() {

  }
  render(){
    return(
      <View style={styles.topview}>
        <View style={styles.less}>
                  <
        </View>
        <View style={styles.less}>
          <text>个人信息</text>

        </View>
      </View>
    )
  }
}
