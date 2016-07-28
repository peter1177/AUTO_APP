

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import Dimensions from 'Dimensions';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

var styles = StyleSheet.create({
  topview: {
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ab0e6',
	height: 60
  },
  title: {
    color: 'white',
    //backgroundColor: 'white',
    fontSize: 22,
	marginTop: 20
  },
	backImg: {
    // borderRadius: 100,
    // resizeMode: 'cover'
    width: width,
    // flex:1,
    // alignSelf:'stretch',
    height: height
    // marginLeft: 20
  }
});


export default class login extends Component {
  render() {
	return(
	<View >
		
		
			<Image source={require('../images/login_bg1.png') } style={styles.backImg} >
				<View style={styles.topview}>
					<Text style={styles.title}>
						登录
					</Text>
				</View>
				<View style={{  justifyContent: 'center', marginTop: 150}}>
					<TextInput placeholder="请输入手机号码" style={{ backgroundColor: 'white',fontSize:19, height:80, borderBottomWidth:1,borderColor: '#f3f3f3'}}/>
				</View>
				
				<View style={{ justifyContent: 'center'}}>
					<TextInput placeholder="请输入密码" style={{ backgroundColor: 'white',fontSize:19,height:80}} />
				</View>
				
				<View style={{justifyContent: 'center',alignItems: 'center',height: 60, marginTop:30}}>
					<View style={{justifyContent: 'center',alignItems: 'center',backgroundColor: '#5ab0e6',height: 60, alignSelf:'stretch',borderRadius: 7,marginLeft:20,marginRight:20}}>
						<Text style={{ color: 'white',fontSize: 20,marginTop: 7}}>
							登录
						</Text>
					</View>
				</View>
		
		
			</Image>
		
	</View>	
		
		
	  
	); 
  }
}


