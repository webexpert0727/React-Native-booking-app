import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

import BackNavbar from '../../components/backNavbar/backNavbar';
import SideMenu from '../../components/sideMenu/sideMenuAdmin';
import Drawer from 'react-native-drawer';
import styles from './myCustomerStyle';
import Row from '../../components/inputLabel/inputLabel'
import Customer from '../../components/customerDetail/customerDetail'

let menuIcon= require('../../assets/menu.png');
let searchIcon= require('../../assets/search.png');
let profile_dateIcon= require('../../assets/profile_date.png');
const {height, width} = Dimensions.get('window');
let drawerStyles = {
  drawer: {
    shadowColor: "#00000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
  main: {paddingLeft: 3},
};

export default class myCustomers extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      firstTab:true,
      secondTab:false
    };
  }

  firstTab(){
    this.setState({secondTab:false})
    this.setState({firstTab:true})
  }
  
  secondTab(){
    this.setState({firstTab:false})
    this.setState({secondTab:true})
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
          <BackNavbar text="MY CUSTOMERS" imageLeft={menuIcon} backPage={()=>{this.openDrawer()}} /> 
          <View style={styles.tab}>
            <TouchableOpacity style={[styles.tabView,{backgroundColor:this.state.firstTab?'black':'#efefef',zIndex:this.state.firstTab?1:0}]} onPress={()=>{this.firstTab()}}>
                <Text style={[styles.textView,{color:this.state.firstTab?'white':'black'}]}>First Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabView,{backgroundColor:this.state.secondTab?'black':'#efefef',marginLeft:-20,zIndex:this.state.firstTab?0:1}]} onPress={()=>{this.secondTab()}}>
                <Text style={[styles.textView,{color:this.state.secondTab?'white':'black'}]}>First Name</Text>
            </TouchableOpacity>
          </View>
          <Row text="Search" placeInput=" " image={searchIcon} width={width/2}/>
          <Customer name="Name1 LastName1" email="Email:user1@test.com" image={profile_dateIcon} width={width/2.4}/>
          <Customer name="Name1 LastName1" email="Email:user1@test.com" image={profile_dateIcon} width={width/2.4}/>
        </View>
      </Drawer>
    );
  }
}