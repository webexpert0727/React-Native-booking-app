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
import styles from './resetPasswordStyle';
const {height, width} = Dimensions.get('window');
let emailIcon= require('../assets/email.png');
let passwordIcon= require('../assets/password.png');
let backArrow= require('../assets/arrow.png');

export default class resetPassword extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props){
    super(props)
  }
  _navigateToBack(navigate){
    navigate('signIn');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="RESET PASSWORD" backPage={()=>{this._navigateToBack(navigate)}} imageLeft={backArrow} />
        <Text style={styles.textStyle}>Enter your email to receive verification token.</Text>
        <SignUpRow text="Email" image={emailIcon} width={width/2}/>
        <View style={{ padding:8}}></View>
        <ButtonValue value="GET TOKEN"/>
        <View style={{ padding:8}}></View>
        <Text style={styles.textStyle}>Check your email and enter received token together with your new password.</Text>
        <SignUpRow text="Token" image={passwordIcon} width={width/2}/>
        <SignUpRow text="New Password" image={passwordIcon} width={width/2}/>
        <View style={{ padding:8}}></View>
        <ButtonValue value="RESET PASSWORD"/>
        <View style={styles.hr}>
        </View>  
      </View>
    );
  }
}