import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
  Modal
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import TabView from '../../components/tabBarLink/tabBarLink';
import BarberScheduleDetails from '../../components/barbersSchedule/barbersSchedule';
import SideMenu from '../../components/sideMenu/sideMenu';
import Drawer from 'react-native-drawer';
import styles from './bookAppointmentStyle';
import AppointmentModal from './bookAppointmentModal';

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
      barber1Active:true,
      barber2Active:false,
      modalVisible: false
    };
  }

  _navigateToAction(){
    
  }
  _navigateToModal(navigate){
    this.setState({modalVisible:true})
  }

  onBarber1Appointment(){
    this.setState({barber2Active:false})
    this.setState({barber1Active:true})
  }
  
  onBarber2Appointment(){
    this.setState({barber1Active:false})
    this.setState({barber2Active:true})
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
          <BackNavbar backPage={()=>{this.openDrawer()}} imageLeft={menuIcon} imageRight={calendarIcon} action={()=>{this._navigateToAction()}}/>
          <View style={styles.tabView}>
            <TabView value="Barber1" active={this.state.barber1Active} nextPage={()=>{this.onBarber1Appointment()}} />
          	<TabView value="Barber2" active={this.state.barber2Active} nextPage={()=>{this.onBarber2Appointment()}}/>
          </View>
          <BarberScheduleDetails value={this.state.barber1Active?'barber1':'barber2'} bookModal={()=>{this._navigateToModal(navigate)}}/>
          <Modal 
            animationType={"none"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => alert("modal is closed")}>
              <AppointmentModal 
                onClose={(val) => this.setState({modalVisible : val})} />
          </Modal>
        </View>
      </Drawer>
    );
  }
}