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
  },
})

export default class User {
  constructor() {

  }
  render(){
    return(
      <View style={styles.topview}>
        <View style={styles.less}>
                    <Text>rr</Text>
        </View>
        <View style={styles.less}>
          <Text>个人信息</Text>

        </View>
      </View>

    );
  }
}
