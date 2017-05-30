import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Text,
  View,
  Image 
} from 'react-native';
import TabLogin from '../../components/tabLogin/tabLogin';
import SignUpRow from '../../components/inputLabel/inputLabel';
import ButtonValue from '../../components/button/buttonValue';
import SideMenu from '../../components/sideMenu/sideMenuAdmin';
import styles from './shopHourStyle.js';
import Drawer from 'react-native-drawer';
import BackNavbar from '../../components/backNavbar/backNavbar';
import ShopSchedule from '../../components/shopSchedule/shopSchedule';

let menuImage = require('../../assets/menu.png');
const {height, width} = Dimensions.get('window');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

export default class ShopHours extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null,
  };
  constructor(props){
    super(props)
  }
  _navigateToNext(navigate){
    navigate('signIn');
  }

  openDrawer(){
    this.refs.drawer.open();
  }
  closeDrawer(navigate){
    this.refs.drawer.close();
  }
  goToCalender(navigate){
    navigate('calender');
  }
  goToBarbers(navigate){
    navigate('myBarbers');
  }
  goToReseptionists(navigate){
    navigate('profile');
  }
  goToCustomers(navigate){
    navigate('myCustomers');
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
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        captureGestures={true}
        negotiatePan={true}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <View style={{flex:1,backgroundColor:'#efefef'}}>
          <BackNavbar text="SHOP HOURS" imageLeft={menuImage} backPage={()=>{this.openDrawer()}} />
          <ScrollView style={{marginTop: -5}}>
            <ShopSchedule title="SUNDAY" from="08:00 am" to="08:00 pm"/>
            <ShopSchedule title="MONDAY" from="08:00 am" to="09:30 pm"/>
            <ShopSchedule title="TUESDAY" from="07:00 am" to="06:00 pm"/>
            <ShopSchedule title="WEDNESDAY" from="08:00 am" to="08:00 pm"/>
            <ShopSchedule title="THURSDAY" from="08:00 am" to="08:00 pm"/>
            <ShopSchedule title="FRIDAY" from="08:00 am" to="08:00 pm"/>
            <ShopSchedule title="SATURDAY" from="08:00 am" to="08:00 pm"/>
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}