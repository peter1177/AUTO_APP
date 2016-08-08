
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';


var styles = StyleSheet.create({

  pageView:{
    height: 500
  },

  topview: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
  //  justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5ab0e6',
    height: 50
  },
  lessThenSignView:{
    flex: 1,
    alignItems: 'flex-start',
  },
  lessThenSign:{  //小于号
    justifyContent: 'center',
    fontSize: 25,
    alignItems: 'center',
    marginLeft: 20
  },
  titleView:{  //个人信息View
    flex: 9,
    alignItems: 'center',
    //alignSelf:'center'
  },
  titleText:{  //个人信息
      fontSize: 20,
      justifyContent: 'center',
      alignSelf:'center'
  },

  contextView: { //内容部分的View
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'stretch'
  },
  contextRowView: { //内容部分的View， 每一行
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 60,
    borderBottomWidth: 3,
    borderColor: '#f3f3f3',
  },
  contextLeftView:{ //内容左边的Text
    flex: 2,
    alignItems: 'flex-start',
    marginLeft: 20
  },
  contextRightView:{ //内容右边的Text
    flex: 8,
  alignItems: 'flex-end',
    marginRight: 20
  },
  contextLeftText:{ //内容左边的Text
    marginLeft: 20
  },
  contextRightText:{ //内容右边的Text
    alignItems: 'flex-end',
    marginRight: 20
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
      <View style={styles.pageView}>
        <View style={styles.topview}>
          <View style={styles.lessThenSignView}>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.pop()}>
              <Text style={styles.lessThenSign}>＜</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>个人信息</Text>
          </View>
        </View>
        <View style={styles.contextView}>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  头像
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <Text style={styles.contextRightText}>
                  个人信息
              </Text>
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  昵称
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <Text style={styles.contextRightText}>
                  小芳芳
              </Text>
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  部落身份证
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <Text style={styles.contextRightText}>
                  xiaofangfang
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
