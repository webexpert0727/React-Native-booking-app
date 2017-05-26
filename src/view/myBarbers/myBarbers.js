import React, { Component } from 'react';
import {
  View,
  Modal
} from 'react-native';

import BackNavbar from '../components/backNavbar/backNavbar';
import Barber from '../components/linkablePanel/linkablePanel';
import SideMenu from '../components/sideMenuAdmin/sideMenuAdmin';
import AddBarber from './addBarbers';
import Drawer from 'react-native-drawer';
import styles from './myBarbersStyle';

let plusIcon= require('../assets/plus.png');
let menuIcon= require('../assets/menu.png');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

export default class myBarbers extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props){
    super(props);
    this.state={
      modalVisible: false,
    }
  }
  
  _navigateToAction(navigate){
    this.setState({modalVisible:true})
  }

  openDrawer(){
    this.refs.drawer.open();
  }
  closeDrawer(navigate){
    //this._drawer.close();
    //this.refs.drawer.close();
    navigate('home');
  }
  goToCalender(navigate){
    navigate('');
  }
  goToBarbers(navigate){
    navigate('myBarbers');
  }
  goToReseptionists(navigate){
    navigate('');
  }
  goToCustomers(navigate){
    navigate('');
  }
  goToShopHours(navigate){
    navigate('shopHours');
  }
  goToInvitation(navigate){
    navigate('');
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
            goToCalender={()=>{this.goToCalender(navigate)}}
            goToBarbers={()=>{this.goToBarbers(navigate)}}
            goToReseptionists={()=>{this.goToReseptionists(navigate)}}
            goToShopHours={()=>{this.goToShopHours(navigate)}}
            goToCustomers={()=>{this.goToCustomers(navigate)}}
            goToInvitation={()=>{this.goToInvitation(navigate)}}
            goToSignOut ={()=>{this.goToSignOut(navigate)}}
            close={()=>{this.closeDrawer(navigate)}}
            page="admin"
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
          <BackNavbar text="MY BARBERS" backPage={()=>{this.openDrawer()}} imageLeft={menuIcon} imageRight={plusIcon} action={()=>{this._navigateToAction(navigate)}}/>
          <View style={styles.barbers}>
            <Barber text="Barber1"/>
            <Barber text="Barber2"/>
          </View>
          <Modal 
            animationType={"none"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => alert("modal is closed")}>
              <AddBarber 
                onClose={(val) => this.setState({modalVisible : val})} />
          </Modal>
        </View>
      </Drawer>
    );
  }
}