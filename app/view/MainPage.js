
'use strict';

import React, { Component } from 'react';


// import Swiper from 'react-native-swiper';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  ScrollView
} from 'react-native';


var styles = StyleSheet.create({


  wrapper: {


  },
  slide1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },



  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    // padding: 30,
    //justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0
  },

  topview: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ab0e6',
    height: 135
  },
  userIcon: {
    borderRadius: 100,
    marginLeft: 20,
    width: 80,
    height: 80
  },

  nameText: {
    color: 'white',
    //backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  nameText2: {
    color: 'white',
    //backgroundColor: 'white',
    fontSize: 15,
    marginLeft: 10
  },
  nemeArea: {
    flex: 1,
    borderWidth: 0,
    alignItems: 'flex-start'
    //alignSelf: 'stretch'
  },
  nemeArea2: {
    flex: 1,
    borderWidth: 0,
    alignItems: 'flex-end',
    marginRight:20
  },
  weatherText: {
    //flex: 1,
    borderWidth: 0,
    alignItems: 'flex-start',
    //alignSelf: 'stretch'
    marginRight: 40
  },
  courseView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    //justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#5ab0e6',
    height: 160
  },
  lichengView: {
    flex: 1,
    // borderWidth: 0,
    // paddingHorizontal: 20,
    borderRightWidth: 1,
    borderColor: '#f3f3f3',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  lichengView2: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  lichengText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },
  lichengText2: {
    fontSize: 19,
    // fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20
  },
  autoView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    //justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#5ab0e6',
    height: 280
  },
  autoInf: {
    fontSize: 19,
    // fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20
  },
  autoImg: {
    // borderRadius: 100,
    resizeMode: 'cover',
    width: 200,
    // flex:1,
    // alignSelf:'stretch',
    height: 100,
    marginLeft: 20
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    //justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#5ab0e6',
    height: 180
  },
  buttonIcon: {
    borderRadius: 100,
    width: 80,
    height: 80
  },
  button: {
    flex: 1,
    // alignSelf: 'stretch',
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center'
  }


});



export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }









  render() {



    return (
       <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.topview}>

          <Image source={require('../img/h.jpg') } style={styles.userIcon} />
          <View style={styles.nemeArea}>
            <Text style={styles.nameText}>
              小芳芳
            </Text>
            <Text style={styles.nameText2}>
              个人信息
            </Text>
          </View>

          <View style={styles.nemeArea2}>
            <View style={styles.weatherText}>
              <Text style={styles.nameText}>
                深圳天气
              </Text>
              <Text style={styles.nameText2}>
                多云转晴
              </Text>
              <Text style={styles.nameText2}>
                12℃~20℃
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.courseView}>
          <View style={styles.lichengView}>
            <Text style={styles.lichengText}>
              昨天
            </Text>
            <Text style={styles.lichengText2}>
              里程<Text style={{ fontSize: 30, color: '#ff6600', }}>188</Text>公里
            </Text>
            <Text style={styles.lichengText2}>
              油耗<Text style={{ fontSize: 30, color: '#5ab0e6', }}>8.6</Text>升/公里
            </Text>
          </View>
          <View style={styles.lichengView}>
            <Text style={styles.lichengText}>
              今天
            </Text>
            <Text style={styles.lichengText2}>
              里程<Text style={{ fontSize: 30, color: '#ff6600', }}>188</Text>公里
            </Text>
            <Text style={styles.lichengText2}>
              油耗<Text style={{ fontSize: 30, color: '#5ab0e6', }}>8.6</Text>升/公里
            </Text>
          </View>
        </View>
        <View style={{ height: 15, backgroundColor: '#f3f3f3', alignSelf: 'stretch' }}/>

        <View style={styles.autoView}>
          <View style={styles.lichengView}>

            <Image source={require('../images/auto.png') } style={styles.autoImg} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 60 }}>
              奥迪 A6L
            </Text>
            <Text style={{ fontSize: 19, marginLeft: 60 }}>
              部落消息<Text style={{ fontSize: 19, color: '#5ab0e6', }}>2</Text>条
            </Text>
          </View>
          <View style={styles.lichengView}>

            <Text style={styles.autoInf}>
              水温<Text style={{ fontSize: 19, color: '#ff6600', }}>60</Text>℃
            </Text>
            <Text style={styles.autoInf}>
              电池电压<Text style={{ fontSize: 19, color: '#5ab0e6', }}>12</Text>V
            </Text>
            <Text style={styles.autoInf}>
              发动机<Text style={{ fontSize: 19, color: '#5ab0e6', }}>正常</Text>
            </Text>
            <Text style={styles.autoInf}>
              暂无违章
            </Text>
            <Text style={styles.autoInf}>
              堵车<Text style={{ fontSize: 19, color: '#ff6600', }}>100</Text>米
            </Text>
          </View>
        </View>
        <View style={{ height: 15, backgroundColor: '#f3f3f3', alignSelf: 'stretch' }}/>

        <View style={styles.buttonView}>
         <View style={styles.button}>
          <Image source={require('../img/h.jpg') } style={styles.buttonIcon} />
          <Text style={{ fontSize: 19, textAlign: 'center' }} >导航</Text>
          </View>
          <View style={styles.button}>
          <Image source={require('../img/h.jpg') } style={styles.buttonIcon} />
          <Text style={{ fontSize: 19, textAlign: 'center' }} >时光机</Text>
          </View>
          <View style={styles.button}>
          <Image source={require('../img/h.jpg') } style={styles.buttonIcon} />
          <Text style={{ fontSize: 19, textAlign: 'center' }} >奥迪A6</Text>
          </View>
          <View style={styles.button}>
          <Image source={require('../img/h.jpg') } style={styles.buttonIcon} />
          <Text style={{ fontSize: 19, textAlign: 'center' }} >网连后勤</Text>
          </View>

        </View>

     </ScrollView>


    );
  }
}
