import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import SideMenu from '../../components/sideMenu/sideMenu';
import InputRow from '../../components/inputLabel/inputLabel';
import Drawer from 'react-native-drawer';
import styles from './editProfileStyle';

const {height, width} = Dimensions.get('window');
let menuIcon= require('../../assets/menu.png');
let tickIcon= require('../../assets/tick.png');
let nameIcon = require('../../assets/name.png');
let phoneIcon= require('../../assets/phone.png');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

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

  _navigateToAction(navigate){
    navigate('shopHours');
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
          <BackNavbar text="EDIT PROFILE" backPage={()=>{this.openDrawer()}} imageLeft={menuIcon} imageRight={tickIcon} action={()=>{this._navigateToAction(navigate)}}/>
          <InputRow text="First Name" image={nameIcon} width={width/2} placeInput={this.state.firstName}/>
          <InputRow text="Last Name" image={nameIcon} width={width/2} placeInput={this.state.lastName}/>
          <InputRow text="Phone Number" image={phoneIcon} width={width/2} placeInput={this.state.phoneNumber}/>
          <View style={styles.hr}>
          </View>
        </View>
      </Drawer>
    );
  }
}