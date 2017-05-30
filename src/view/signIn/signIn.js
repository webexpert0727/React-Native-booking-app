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
let backArrow= require('../assets/arrow.png');
const {height, width} = Dimensions.get('window');

export default class signIn extends Component {
  static navigationOptions = {
    // title: 'LogIn',
    headerMode: 'none',
    header: null,
  };
  constructor(props){
    super(props)
  }
  _navigateToNext(navigate){
    user = this.props.navigation.state.params.page
    console.log(user);
    if(user == 'customer'){
      navigate('home');
    }
    else if(user=='secretary'){
      navigate('secretaryCalender');
    }
    else{
      navigate('appointments');
    }
  }
  _navigateToBack(navigate){
    navigate('login');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor:'#efefef'}}>
        <BackNavbar text="SIGN IN" backPage={()=>{this._navigateToBack(navigate)}} imageLeft={backArrow} />
        <SignUpRow text="Email" image={mailBox} width={width/2}/>
        <SignUpRow text="Password" image={passwordKey} width={width/2}/>
        <View style={{marginTop:20}}>
          <ButtonValue value="SIGN IN" nextPage={()=>{this._navigateToNext(navigate)}}  width={width/2}/>
      	</View>
      	<TouchableOpacity style={styles.forgotView} onPress={() => navigate('resetPassword')}>
    		  <Text style={styles.forgotPass}>Forgot your password?</Text>
    		</TouchableOpacity>
    		<View style={styles.footer}>
          <TouchableOpacity  onPress={() => navigate('signUp')}>
            <Text style={styles.footerText}>CREATE ACCOUNTS</Text>
          </TouchableOpacity>
    		</View>
      </View>
    );
  }
}