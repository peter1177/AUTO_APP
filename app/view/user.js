
'use strict';

import React, { Component } from 'react';

//var ImagePickerManager = require('NativeModules').ImagePickerManager;
 var ImagePickerManager = require('react-native-image-picker');

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Navigator,
  TouchableOpacity,
  Picker,
  Alert
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
    //marginLeft: 20
  },
  contextRightText:{ //内容右边的Text
    alignItems: 'flex-end',
    textAlign: 'right',
    width:100
  },
  userIcon: {  //头像图片
      borderRadius: 100,
      marginLeft: 20,
      width: 80,
      height: 80
    },
  userIconRowView: { //带有头像的那一行
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 90,
    borderBottomWidth: 3,
    borderColor: '#f3f3f3'
  },
    description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  }
});

//数据来源地址。
//var wsUrl = 'http://123.57.247.48:8080/hud';
var wsUrl = 'http://192.168.5.22:8080/hud';
var REQUEST_URL = wsUrl + '/rest/appUser/getUserInfo.do?userId=1';

var sexPicker = '{"男":"男",“女”:"女"}';

export default class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appUserId: '',
      message: '',
      isLoading: false,
      userName: '',  //用户名称
      appId: '',    //系统生成的ID
      status: '',   //签名
      sex: '',      //性别
    	district: '', //地区
    	carNum: '',   //车牌号
    	level: '',    //等级
    	url: '',       //头像的地址
      avatarSource: null //相册用
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {

          console.log(responseData);
          this.setState({
            appUserId:responseData.appUserId,
            userName: responseData.userName,
            isLoading: true,
            appId: responseData.appId,    //系统生成的ID
            status: responseData.status,   //签名
            sex: responseData.sex,      //性别
            district: responseData.district, //地区
            carNum: responseData.carNum,   //车牌号
            level: responseData.level,    //等级
            url: responseData.url      //头像的地址
          });
        })
        .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
         }));
    }


  _save() {
    this.props.navigator.push({
      name: 'user',
      component: user
    })
  }

  //保存个人信息。
  save(){
      var url = wsUrl + '/rest/appUser/save.do?user=';

      var user={
        appUserId: this.state.appUserId,
        userName:  this.state.userName,
        status:  this.state.status,   //签名
        sex:  this.state.sex,     //性别
        district: this.state.district, //地区
        carNum: this.state.carNum  //车牌号
      };
      url=url+JSON.stringify(user);

      //头像处理
      let formData = new FormData();

      if (this.state.url === null) {
        formData.append("photo",{uri:this.state.photoUri,type:'application/octet-stream',name:'photo'});
      }

      let options = {};
      options.body = formData;
      options.method = 'post';

      fetch(url, options)
        .then((response) => response.json())
        .then((responseData) => {
        })
        .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
         }));

  }

  //换头像
  selectPhotoTapped(picType) {

      const options = {
          title: '选择图片', // specify null or empty string to remove the title
          cancelButtonTitle: '取消',
          takePhotoButtonTitle: '拍照', // specify null or empty string to remove this button
          chooseFromLibraryButtonTitle: '图库', // specify null or empty string to remove this button
          //customButtons: {
          //    'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
          //},
          cameraType: 'back', // 'front' or 'back'
          mediaType: 'photo',
          //videoQuality: 'high', // 'low', 'medium', or 'high'
          maxWidth: 200, // photos only
          maxHeight: 200, // photos only
          allowsEditing: true,
          noData: false,
      };

      ImagePickerManager.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePickerManager Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          var source;

          //Alert.alert('温馨提醒',response.uri);
          // You can display the image using either:
          source = {uri: response.uri, isStatic: true};
          this.setState({
            url: null,
            avatarSource: source,
            photoUri: response.uri
          });
        }
      });
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
          <View style={styles.userIconRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  头像
               </Text>
            </View>
            <View style={styles.contextRightView}>
                <TouchableOpacity onPress={() => this.selectPhotoTapped('')} style={styles.uploadArea}>
                  {this.state.url === null || typeof(this.state.url)=== 'undefined' || this.state.url === '' ? (this.state.avatarSource !== null ? <Image source={this.state.avatarSource} style={styles.userIcon} />
                    :<Text style={styles.contextRightText}> 点击这里选取头像 </Text>)
                  : <Image source={{uri: this.state.url}} style={styles.userIcon} />
                  }
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
              <Text style={styles.contextLeftText}>
                昵称
              </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={styles.contextRightText}
                 underlineColorAndroid="transparent"
                 onChangeText={(userName) => this.setState({userName})}
                 value={this.state.userName}
               />
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
                  {this.state.appId}
              </Text>
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  性别
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <Picker mode={'dropdown'} style={{width:55}}
                underlineColorAndroid="transparent"
                selectedValue={this.state.sex}
                onValueChange={(sex) => this.setState({sex: sex})}>
                <Picker.Item label="男" value="男" />
                <Picker.Item label="女" value="女" />
              </Picker>
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  地区
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={styles.contextRightText}
                 underlineColorAndroid="transparent"
                 onChangeText={(district) => this.setState({district})}
                 value={this.state.district}
               />
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  车牌号
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={styles.contextRightText}
                 underlineColorAndroid="transparent"
                 onChangeText={(carNum) => this.setState({carNum})}
                 value={this.state.carNum}
               />
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  等级
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <Text style={styles.contextRightText}>
                  {this.state.level}
              </Text>
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  个性签名
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={ {width: 200}}
                 underlineColorAndroid="transparent"
                 multiline={true}
                 onChangeText={(status) => this.setState({status})}
                 value={this.state.status}
               />
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#5ab0e6',height: 60, alignSelf:'stretch',borderRadius: 7,marginLeft:20,marginRight:20}}>
              <TouchableOpacity onPress={() => this.save()} >
                <Text style={{ color: 'white',fontSize: 20,marginTop: 7}}>
  							       保存
  						  </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.description}>{this.state.message}</Text>
        </View>
      </View>
    );
  }
}
