import React, { Component } from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import styles from './homeStyle';

let menuIcon= require('../../assets/menu.png');
let fbIcon= require('../../assets/facebook.png');
let instagramIcon= require('../../assets/instagram.png');
let googleIcon= require('../../assets/google.png');
let foursquareIcon= require('../../assets/foursquare.png');
let yelpIcon= require('../../assets/yelp.png');

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
        navigate('');
  }
  
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="HOME" backPage={()=>{this._navigateToMenu(navigate)}} imageLeft={menuIcon}/>
        <View style={styles.textWrap}>
        	<Text style={styles.textStyle}>To cancel appointment, please call.</Text>
      	</View>
        <View style={styles.hr}>
        </View>
        <View style={styles.row}>
            <Image style={styles.image}  source={fbIcon}/>
            <Image style={styles.image}  source={instagramIcon}/>
            <Image style={styles.image}  source={googleIcon}/>
            <Image style={styles.image}  source={foursquareIcon}/>
            <Image style={styles.image}  source={yelpIcon}/>
        </View>
      </View>
    );
  }
}