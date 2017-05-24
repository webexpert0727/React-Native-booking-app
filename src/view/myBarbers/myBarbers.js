import React, { Component } from 'react';
import {
  View
} from 'react-native';

import BackNavbar from '../components/backNavbar/backNavbar';
import Barber from '../components/linkablePanel/linkablePanel';
import styles from './myBarbersStyle';

let plusIcon= require('../assets/plus.png');
let menuIcon= require('../assets/menu.png');

export default class myBarbers extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  _navigateToMenu(navigate){
        navigate('');
  }
  _navigateToAction(navigate){
        navigate('');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="MY BARBERS" backPage={()=>{this._navigateToMenu(navigate)}} imageLeft={menuIcon} imageRight={plusIcon} action={()=>{this._navigateToAction(navigate)}}/>
        <View style={styles.barbers}>
          <Barber text="Barber1"/>
          <Barber text="Barber2"/>
        </View>
      </View>
    );
  }
}