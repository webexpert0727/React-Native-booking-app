import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
  Modal
} from 'react-native';

import SideMenu from '../../components/sideMenu/sideMenuBarber';
import Drawer from 'react-native-drawer';
import Appointment from '../../components/appointment/appointmentCalender';

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

  openDrawer(){
    this.refs.drawer.open();
  }
  closeDrawer(navigate){
    this.refs.drawer.close();
  }
  goToAppointments(navigate){
    navigate('appointments');
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
            goToAppointments={()=>{this.goToAppointments(navigate)}}
            goToSignOut ={()=>{this.goToSignOut(navigate)}}
            close={()=>{this.closeDrawer(navigate)}}
            page="barber"
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
        <Appointment backPage={()=>{this.openDrawer()}} page="barber" />
      </Drawer>
    );
  }
}