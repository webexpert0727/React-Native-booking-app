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
import TabLogin from '../components/tabLogin/tabLogin';
import SignUpRow from '../components/inputLabel/inputLabel';
import ButtonValue from '../components/button/buttonValue';
import styles from './shopHourStyle.js';
import BackNavbar from '../components/backNavbar/backNavbar';
import ShopSchedule from '../components/shopSchedule/shopSchedule';

let menuImage = require('../assets/menu.png');
const {height, width} = Dimensions.get('window');

export default class ShopHours extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null,
  };
  _navigateToNext(navigate){
        navigate('signIn');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor:'#efefef'}}>
          <BackNavbar text="SHOP HOURS" imageLeft={menuImage} />
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
    );
  }
}