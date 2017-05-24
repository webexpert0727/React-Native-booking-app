import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import Barber from '../../components/linkablePanel/linkablePanel';
import styles from './myProfileStyle';

let editIcon= require('../../assets/edit.png');
let menuIcon= require('../../assets/menu.png');

export default class myProfile extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
   _navigateToMenu(navigate){
        navigate('');
  }
  _navigateToAction(navigate){
        navigate('editProfile');
  }
  
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="MY PROFILE" backPage={()=>{this._navigateToMenu(navigate)}} imageLeft={menuIcon} imageRight={editIcon} action={()=>{this._navigateToAction(navigate)}}/>
        <View style={styles.member}>
        	<Text style={styles.memberTextStyle}>NAME1 LASTNAME1</Text>
        	<Text style={styles.membershipTextStyle}>Member Since:</Text>
        </View>
        <View style={styles.details}>
          <Barber text="Phone" textValue="25452525"/>
          <Barber text="Email" textValue="user1@test.com"/>
        </View>
        <View style={styles.hr}>
        </View>
      </View>
    );
  }
}