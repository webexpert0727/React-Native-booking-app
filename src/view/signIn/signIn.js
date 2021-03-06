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
import styles from './signInStyle.js';
import BackNavbar from '../components/backNavbar/backNavbar';

let mailBox = require('../assets/email.png');
let passwordKey = require('../assets/password.png');
const {height, width} = Dimensions.get('window');

export default class signIn extends Component {
  static navigationOptions = {
    // title: 'LogIn',
    headerMode: 'none',
    header: null,
  };
  _navigateToNext(navigate){
        navigate('signIn');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor:'#efefef'}}>
          <BackNavbar text="SIGN IN"/>
          <SignUpRow text="Email" image={mailBox} width={width/2}/>
          <SignUpRow text="Password" image={passwordKey} width={width/2}/>
          <View style={{marginTop:20}}>
          	 <ButtonValue value="SIGN IN"/>
        	</View>
        	<TouchableOpacity style={styles.forgotView} onPress={() => navigate('resetPassword')}>
        		  <Text style={styles.forgotPass}>Forgot your password?</Text>
      		</TouchableOpacity>
      		<View style={styles.footer}>
      			 <Text style={styles.footerText}>CREATE ACCOUNTS</Text>
      		</View>
      </View>
    );
  }
}