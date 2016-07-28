

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';



var styles = StyleSheet.create({
  topview: {
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ab0e6',
	height: 80
  },
  title: {
    color: 'white',
    //backgroundColor: 'white',
    fontSize: 30,
	marginTop: 25
  }
});


export default class login extends Component {
  render() {
	return(
	<View >
		
		
			<View style={styles.topview}>
				<Text style={styles.title}>
					登录
				</Text>
			</View>
			<View style={{  justifyContent: 'center', marginTop: 150}}>
				<TextInput placeholder="请输入手机号码" style={{ backgroundColor: 'white',fontSize:30}}/>
			</View>
		  
			<View style={{ justifyContent: 'center'}}>
				<TextInput placeholder="请输入密码" style={{ backgroundColor: 'white',fontSize:30}} />
			</View>
			
			<View style={{justifyContent: 'center',alignItems: 'center',height: 80, marginTop:30}}>
				<View style={{justifyContent: 'center',alignItems: 'center',backgroundColor: '#5ab0e6',height: 60, width:550,borderRadius: 7}}>
					<Text style={{ color: 'white',fontSize: 25,marginTop: 10}}>
						登录
					</Text>
				</View>
			</View>
		
	</View>	
		
		
	  
	); 
  }
}


