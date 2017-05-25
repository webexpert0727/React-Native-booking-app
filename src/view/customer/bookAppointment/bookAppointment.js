import React, { Component } from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import TabView from '../../components/tabBarLink/tabBarLink';
import Schedule from '../../components/appointmentSchedule/appointmentSchedule';
import SideMenu from '../../components/sideMenu/sideMenu';
import Drawer from 'react-native-drawer';
import styles from './bookAppointmentStyle';

let menuIcon= require('../../assets/menu.png');
let calendarIcon= require('../../assets/calendarBooking.png');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

export default class bookAppointment extends Component {
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

  _navigateToAction(navigate){
    navigate('');
  }

  onBarber1Appointment(){
   <TabView value="Barber1" time="09:00" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open"/>
  }
  onBarber2Appointment(navigate){
    
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
    navigate('myBarbers');
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
          <BackNavbar backPage={()=>{this.openDrawer()}} imageLeft={menuIcon} imageRight={calendarIcon} action={()=>{this._navigateToAction(navigate)}}/>
          <View style={styles.tabView}>
          	<TabView value="Barber1" nextPage={()=>{this.onBarber1Appointment()}} />
          	<TabView value="Barber2" nextPage={()=>{this.onBarber2Appointment()}}/>
          </View>
        </View>
      </Drawer>
    );
  }
}