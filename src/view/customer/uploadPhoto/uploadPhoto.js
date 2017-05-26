import React, { Component } from 'react';
import {
	View
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import SideMenu from '../../components/sideMenu/sideMenu';
import ButtonValue from '../../components/button/buttonValue';
import Drawer from 'react-native-drawer';
import styles from './uploadPhotoStyle';

let menuIcon= require('../../assets/menu.png');
let uploadIcon= require('../../assets/upload.png');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

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
          <BackNavbar text="UPLOAD PHOTO" backPage={()=>{this.openDrawer()}} imageLeft={menuIcon}/>
          <View style={styles.hr}>
          </View>
        	<ButtonValue value="PICK PHOTO" image={uploadIcon} nextPage={()=>{this._navigateToNext(navigate)}}/>
        </View>
      </Drawer>
    );
  }
}