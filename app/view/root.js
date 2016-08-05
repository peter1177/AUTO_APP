

import React, { Component } from 'react';

import index from './index';

import {
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
  BackAndroid,
  ToastAndroid,
  Navigator
} from 'react-native';



var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});




export default class root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }



  componentWillMount() {
    if (Platform.OS === 'android') {

      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

  }
  compentWillUnmount() {
    if (Platform.OS === 'android') {

      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

  }

  onBackAndroid = () => {

    const navigator = this.refs.navigator;
    const routers = navigator.getCurrentRoutes();
    if (routers.length > 1) {

      navigator.pop();
      return true;
    } else{

      if (this.lastBackPressed = Date.now() && this.lastBackPressed + 2000 >= Date.now()) {

        return false;
      }

      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }

    // Alert.alert(
    //         '确定退出？',
    //         alertMessage,
    //         [
    //           {text: '取消', onPress: () => return true},
    //           {text: 'OK', onPress: () => return false},
    //         ]
    //       );

    // return true;

  };


  render() {
    let defaultName = 'index';
    let defaultComponent = index;
    return (
      <Navigator
        ref = "navigator"
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FadeAndroid;
        } }
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        } } />
    );
  }

}



