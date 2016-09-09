
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
  Alert,
  ScrollView
} from 'react-native';


var styles = StyleSheet.create({
  container: {
    borderWidth: 0
  },
  pageView:{
    height: 570
  },

  topview: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
  //  justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5ab0e6',
    height: 46
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
    height: 47,
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
    width:100
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
var REQUEST_URL = wsUrl + '/rest/car/carInfo.do?userId=1';
var FECH_BRANDS_URL = wsUrl + '/rest/car/findBrands';
var FECH_MODELS_URL = wsUrl + '/rest/car/findModels?brandId=';
export default class CarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carDp:'',   //头像的地址
      carNum:'',
      level:'',
      brandId:0,
      modelId:0,
      driveDistance:'',
      maintenanceCycle:0,
      engineNum:'',
      carCode:'',
      appUserId:1,
      avatarSource: null, //相册用
      brandsMap:  [],
      modelsMap:  [],
      isLoading: false,
      message: ''
    };
    this.fetchData = this.fetchData.bind(this);
    this.fetchModels = this.fetchModels.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

    //取汽车型号数据
    fetchModels(brandId) {
        fetch(FECH_MODELS_URL + brandId)
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
            this.setState({
              modelsMap: responseData
            });
          })
          .catch(error =>
          this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
           }));
      }

  //取车的信息
  fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          this.setState({
            carId: responseData.carInfo.id,
            carDp: responseData.carInfo.carDp,
            carNum: responseData.carInfo.carNum,
            level: responseData.carInfo.level,
            driveDistance: responseData.carInfo.driveDistance,
            maintenanceCycle: responseData.carInfo.maintenanceCycle,
            engineNum: responseData.carInfo.engineNum,
            carCode: responseData.carInfo.carCode,
            brandsMap: responseData.brands,
            modelsMap: responseData.models,
            brandId: responseData.carInfo.brandId,
            modelId: responseData.carInfo.modelId
          });
          //this.fetchBrands(responseData.brandId); //取汽车品牌数据
        })
        .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
         }));
    }


  //保存个人信息。
  save(){
      var url = wsUrl + '/rest/car/saveCarInfo.do?carInfo=';

      var carInfo={
        id: this.state.carId,
        carNum: this.state.carNum,
        driveDistance: this.state.driveDistance,
        maintenanceCycle: this.state.maintenanceCycle,
        engineNum: this.state.engineNum,
        carCode: this.state.carCode,
        appUserId: this.state.appUserId,
        modelId: this.state.modelId
      };
      url=url+JSON.stringify(carInfo);

      //头像处理
      let formData = new FormData();
      let options = {};
      if (this.state.avatarSource !== null) {
        formData.append("carPhoto",{uri:this.state.photoUri,type:'application/octet-stream',name:'carPhoto'});
        options.body = formData;
      }
      options.method = 'post';

      fetch(url, options)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            carId: responseData.id
          });
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
      <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.pageView}>
        <View style={styles.topview}>
          <View style={styles.lessThenSignView}>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.pop()}>
              <Text style={styles.lessThenSign}>＜</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>车信息</Text>
          </View>
        </View>
        <View style={styles.contextView}>
          <View style={styles.userIconRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  车像
               </Text>
            </View>
            <View style={styles.contextRightView}>
                <TouchableOpacity onPress={() => this.selectPhotoTapped('')} style={styles.uploadArea}>
                  {(this.state.carDp === null || typeof(this.state.carDp)=== 'undefined' || this.state.carDp === '') ? (this.state.avatarSource !== null ? <Image source={this.state.avatarSource} style={styles.userIcon} />
                    :<Text style={styles.contextRightText}> 点击这里选车像 </Text>)
                  : <Image source={{uri: this.state.carDp}} style={styles.userIcon} />
                  }
                </TouchableOpacity>
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
                  品牌
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <Picker mode={'dialog'} style={{width:155}}
                underlineColorAndroid="transparent"
                selectedValue={this.state.brandId}
                onValueChange={(brandId) => {
                    this.setState({brandId: brandId});
                    this.fetchModels(brandId);
                  }}>
                  {this.state.brandsMap.map((brand) => {
                    return <Picker.Item value={brand.Id} label={brand.brand} key={brand.Id}  /> })}
              </Picker>
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  型号
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <Picker mode={'dialog'} style={{width:155}}
                underlineColorAndroid="transparent"
                selectedValue={this.state.modelId}
                onValueChange={(modelId) => {
                    this.setState({modelId: modelId});
                  }}>
                  {this.state.modelsMap.map((model) => {
                    return <Picker.Item value={model.Id} label={model.model} key={model.Id}/> })}
              </Picker>
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  行驶距离
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={styles.contextRightText}
                 underlineColorAndroid="transparent"
                 onChangeText={(driveDistance) => this.setState({driveDistance})}
                 value={typeof(this.state.driveDistance) ==='undefined' ? '' : this.state.driveDistance.toString()}
               />
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  保养周期
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={styles.contextRightText}
                 underlineColorAndroid="transparent"
                 onChangeText={(maintenanceCycle) => this.setState({maintenanceCycle})}
                 value={typeof(this.state.maintenanceCycle) ==='undefined' ? '' : this.state.maintenanceCycle.toString()}
               />
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  发动机代码
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={styles.contextRightText}
                 underlineColorAndroid="transparent"
                 onChangeText={(engineNum) => this.setState({engineNum})}
                 value={this.state.engineNum}
               />
            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={styles.contextLeftView}>
               <Text style={styles.contextLeftText}>
                  车辆识别代码
               </Text>
            </View>
            <View style={styles.contextRightView}>
              <TextInput style={styles.contextRightText}
                 underlineColorAndroid="transparent"
                 onChangeText={(carCode) => this.setState({carCode})}
                 value={this.state.carCode}
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

            </View>
          </View>
          <View style={styles.contextRowView}>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#5ab0e6',height: 47, alignSelf:'stretch',borderRadius: 7,marginLeft:20,marginRight:20}}>
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

      </ScrollView>

    );
  }
}
