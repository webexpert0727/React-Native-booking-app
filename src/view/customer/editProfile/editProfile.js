import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import InputRow from '../../components/inputLabel/inputLabel';
import styles from './editProfileStyle';

const {height, width} = Dimensions.get('window');
let menuIcon= require('../../assets/menu.png');
let tickIcon= require('../../assets/tick.png');
let nameIcon = require('../../assets/name.png');
let phoneIcon= require('../../assets/phone.png');

export default class editProfile extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'Lastname1',
      phoneNumber:'25452525'
    };
  }
  _navigateToMenu(navigate){
        navigate('');
  }
  _navigateToAction(navigate){
        navigate('shopHours');
  }
  
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="EDIT PROFILE" backPage={()=>{this._navigateToMenu(navigate)}} imageLeft={menuIcon} imageRight={tickIcon} action={()=>{this._navigateToAction(navigate)}}/>
        <InputRow text="First Name" image={nameIcon} width={width/2} placeInput={this.state.firstName}/>
        <InputRow text="Last Name" image={nameIcon} width={width/2} placeInput={this.state.lastName}/>
        <InputRow text="Phone Number" image={phoneIcon} width={width/2} placeInput={this.state.phoneNumber}/>
        <View style={styles.hr}>
        </View>
      </View>
    );
  }
}