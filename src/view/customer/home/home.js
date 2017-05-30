import React, { Component } from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import SideMenu from '../../components/sideMenu/sideMenu';
import Drawer from 'react-native-drawer';
import styles from './homeStyle';

let menuIcon= require('../../assets/menu.png');
let fbIcon= require('../../assets/facebook.png');
let instagramIcon= require('../../assets/instagram.png');
let googleIcon= require('../../assets/google.png');
let foursquareIcon= require('../../assets/foursquare.png');
let yelpIcon= require('../../assets/yelp.png');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

export default class home extends Component {
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
  
  openDrawer(){
    this.refs.drawer.open();
  }
  closeDrawer(navigate){
    this.refs.drawer.close();
  }
  goToHome(navigate){
    navigate('home');
  }
  goToBookAppointent(navigate){
    navigate('bookAppointment');
  }
  goToUploadPhoto(navigate){
    navigate('uploadPhoto');
  }
  goToSignOut(navigate){
    navigate('login');
  }
  
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <Drawer
        ref="drawer"
        type="overlay"
        content={
          <SideMenu
            goToHome={()=>{this.goToHome(navigate)}}
            goToBookAppointent={()=>{this.goToBookAppointent(navigate)}}
            goToUploadPhoto={()=>{this.goToUploadPhoto(navigate)}}
            goToSignOut ={()=>{this.goToSignOut(navigate)}}
            close={()=>{this.closeDrawer(navigate)}}
            page="customer"
          />}
        tapToClose={false}
        openDrawerOffset={0.3}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        captureGestures={true}
        negotiatePan={true}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <View style={styles.container}>
          <BackNavbar text="HOME" backPage={()=>{this.openDrawer()}} imageLeft={menuIcon}/>
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
      </Drawer>
    );
  }
}