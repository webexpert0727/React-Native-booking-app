import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import BackNavbar from '../../components/backNavbar/backNavbar';
import Detail from '../../components/linkablePanel/linkablePanel';
import styles from './profileStyle';
const {height, width} = Dimensions.get('window');
let deleteIcon= require('../../assets/delete.png');
let backArrow= require('../../assets/arrow.png');
let customer= require('../../assets/user.jpg');

export default class profile extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props){
    super(props)
  }
  _navigateToBack(navigate){
    navigate('shopHours');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackNavbar text="NAME1" columnRow2Text="Profile" backPage={()=>{this._navigateToBack(navigate)}} imageLeft={backArrow} imageRight={deleteIcon}/>
        <View style={styles.details}>
          <Detail text="Email" textValue="user1@test.com"/>
          <Detail text="First Name" textValue="First Name1"/>
          <Detail text="Last Name" textValue="Last Name1"/>
          <Detail text="Phone" textValue="25452525"/>
          <View>
            <Text style={styles.title}>Photos</Text>
          </View>
        </View>
        <View style={styles.images}>
          <Image style={styles.customerImages} source={customer}/>
          <Image style={styles.customerImages} source={customer}/>
          <Image style={styles.customerImages} source={customer}/>
          <Image style={styles.customerImages} source={customer}/>
          <Image style={styles.customerImages} source={customer}/>
        </View>
      </View>
    );
  }
}