import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import SideMenu from '../../components/sideMenu/sideMenu';
import Barber from '../../components/linkablePanel/linkablePanel';
import Drawer from 'react-native-drawer';
import styles from './myProfileStyle';

let editIcon= require('../../assets/edit.png');
let menuIcon= require('../../assets/menu.png');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

export default class myProfile extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };

  constructor(props){
    super(props)
  }
  
  _navigateToAction(navigate){
        navigate('editProfile');
  }

  openDrawer(){
    this.refs.drawer.open();
  }
  closeDrawer(navigate){
    //this._drawer.close();
    //this.refs.drawer.close();
    navigate('home');
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
          />}
        tapToClose={false}
        openDrawerOffset={0.3}
        panCloseMask={0.5}
        closedDrawerOffset={-3}
        captureGestures={true}
        negotiatePan={true}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <View style={styles.container}>
          <BackNavbar text="MY PROFILE" backPage={()=>{this.openDrawer()}} imageLeft={menuIcon} imageRight={editIcon} action={()=>{this._navigateToAction(navigate)}}/>
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
      </Drawer>
    );
  }
}