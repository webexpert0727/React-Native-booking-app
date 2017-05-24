import React, { Component } from 'react';
import {
	View
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import ButtonValue from '../../components/button/buttonValue';
import styles from './uploadPhotoStyle';

let menuIcon= require('../../assets/menu.png');
let uploadIcon= require('../../assets/upload.png');

export default class uploadPhoto extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _navigateToMenu(navigate){
        navigate('signIn');
  }
  
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="UPLOAD PHOTO" backPage={()=>{this._navigateToMenu(navigate)}} imageLeft={menuIcon}/>
        <View style={styles.hr}>
        </View>
      	<ButtonValue value="PICK PHOTO" image={uploadIcon} nextPage={()=>{this._navigateToNext(navigate)}}/>
      </View>
    );
  }
}