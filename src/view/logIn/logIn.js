import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Text,
  View,
  Image 
} from 'react-native';
import TabLogin from '../components/tabLogin/tabLogin';
import SignUpRow from '../components/inputLabel/inputLabel';
import ButtonValue from '../components/button/buttonValue';
import styles from './loginStyle.js';

let mailBox = require('../assets/email.png');
let passwordKey = require('../assets/password.png');
const {height, width} = Dimensions.get('window');

export default class logIn extends Component {
  static navigationOptions = {
    // title: 'LogIn',
    headerMode: 'none',
    header: null,
  };
  constructor(props){
    super(props);
    this.state = {
    };
  }
  _navigateToNext(navigate){
    navigate('shopHours');
  }
  navigateToAdmin(navigate){
    navigate('login');
  }
  navigateToTab(navigate,user){
    navigate('signIn',{ page: user });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          <Image style={styles.imageView} source={require('../assets/logo.png')}/>
        </View>
        <ScrollView style={styles.midContainer}>
          <View style={styles.tabBarStyle}>
            <TabLogin text="Admin" color="#000" textColor="#fff" tabPage={()=>{this.navigateToAdmin(navigate)}}  />
            <TabLogin text="Barber" textColor="#000" tabPage={()=>{this.navigateToTab(navigate,'barber')}}/>
            <TabLogin text="Customer" textColor="#000" tabPage={()=>{this.navigateToTab(navigate,'customer')}}/>
            <TabLogin text="Secretary" textColor="#000" tabPage={()=>{this.navigateToTab(navigate,'secretary')}}/>
          </View>
          <SignUpRow text="Email" image={mailBox} width={width/2}  />
          <SignUpRow text="Password" image={passwordKey} width={width/2}/>
          <View style={styles.footer}>
            <Text style={styles.textColor}>New User? </Text>
            <TouchableOpacity onPress={() => navigate('signUp')}>
              <Text style={[styles.textColor,{color:'#2ad5a3'}]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{margin: 20}}>
            <ButtonValue value="LOGIN" nextPage={()=>{this._navigateToNext(navigate)}}  width={width/2}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}