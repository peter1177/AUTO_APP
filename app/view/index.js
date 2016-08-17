

import React, { Component } from 'react';

import MainPage from './MainPage';

import Login from './login';

import TabNavigator from 'react-native-tab-navigator';

import User from './user';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';





export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {

      selectedTab: 'home'
    };
  }


 _pressH = () => {

    this.props.navigator.push({
      name: 'User',
      component: User
    })


  }


  render() {


    // let defaultName = 'MainPage';
    // let defaultComponent = MainPage;
    // return (
    // <Navigator
    //   initialRoute={{ name: defaultName, component: defaultComponent }}
    //   configureScene={(route) => {
    //     return Navigator.SceneConfigs.FadeAndroid;
    //   }}
    //   renderScene={(route, navigator) => {
    //     let Component = route.component;
    //     return <Component {...route.params} navigator={navigator} />
    //   }} />
    // );

    var homeView = (
      <View >
        <Text style={{ fontSize: 22 }}>我是主页</Text>
      </View>


    );

    var profileView = (
      <View >
        <Text style={{ fontSize: 22 }}>我是设置</Text>
      </View>


    );


     

    return (
      <TabNavigator tabBarStyle={styles.tab} > 
        <TabNavigator.Item 
          selected={this.state.selectedTab === 'home'}
          // title="首页"
          renderIcon={() => <Image source={require('../images/2.png') } />}
          renderSelectedIcon={() => <Image source={require('../images/1.png') } />}
          // badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' }) }>
          <MainPage onPressH={this._pressH} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'zhishiku'}
          // title="知识库"
          renderIcon={() => <Image source={require('../images/4.png') } />}
          renderSelectedIcon={() => <Image source={require('../images/3.png') } />}
          // renderBadge={() => <Text>hehe</Text>}
          onPress={() => this.setState({ selectedTab: 'zhishiku' }) }>
          {profileView}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          // title="我的"
          renderIcon={() => <Image source={require('../images/6.png') } />}
          renderSelectedIcon={() => <Image source={require('../images/5.png') } />}
          // renderBadge={() => <Text>hehe</Text>}
          onPress={() => this.setState({ selectedTab: 'profile' }) }>
          <Login/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'setting'}
          // title="知识库"
          renderIcon={() => <Image source={require('../images/4.png') } />}
          renderSelectedIcon={() => <Image source={require('../images/3.png') } />}
          // renderBadge={() => <Text>hehe</Text>}
          onPress={() => this.setState({ selectedTab: 'setting' }) }>
          {profileView}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

}




var styles = StyleSheet.create({
  tab: {
    height: 80
  },
  buttonBigText: {

    fontSize: 15,
    textAlign: 'center',
    color: '#656565'
  },
  image: {
    width: 29,
    height: 29
  }

});
