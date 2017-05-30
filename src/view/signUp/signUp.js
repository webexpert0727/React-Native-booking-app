import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import SignUpRow from '../components/inputLabel/inputLabel';
import ButtonValue from '../components/button/buttonValue';
import BackNavbar from '../components/backNavbar/backNavbar';
import styles from './signUpStyle';

const {height, width} = Dimensions.get('window');
let nameIcon = require('../assets/name.png');
let emailIcon= require('../assets/email.png');
let phoneIcon= require('../assets/phone.png');
let passwordIcon= require('../assets/password.png');
let backArrow= require('../assets/arrow.png');

export default class signUp extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props){
    super(props)
  }
  _navigateToNext(navigate){
    navigate('login');
  }
  _navigateToBack(navigate){
    navigate('login');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="SIGN UP" backPage={()=>{this._navigateToBack(navigate)}} imageLeft={backArrow}/>
        <SignUpRow text="Invitation Code" width={width/1.8}/>
        <SignUpRow text="First Name" image={nameIcon} width={width/2}/>
        <SignUpRow text="Last Name" image={nameIcon} width={width/2}/>
        <SignUpRow text="Email" image={emailIcon} width={width/2}/>
        <SignUpRow text="Phone Number" image={phoneIcon} width={width/2}/>
        <SignUpRow text="Password" image={passwordIcon} width={width/2}/>
        <SignUpRow text="Confirm Password" image={passwordIcon} width={width/2}/>
        <View style={styles.hr}>
        </View>
        <ButtonValue value="SIGN UP" nextPage={()=>{this._navigateToNext(navigate)}}  width={width/1.8}/>
      </View>
    );
  }
}