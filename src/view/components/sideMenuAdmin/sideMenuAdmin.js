import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './sideMenuAdminStyle';

let { width, height } = Dimensions.get('window');
let closeMenuIcon= require('../../assets/close_menu.png');

export default class sideMenuAdmin extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps() {
  }
  render() {
    return (
      <View style={styles.menu}>          
        <View style={styles.menuHeader}>
          <View style={styles.memberDetail}>
            <Text style={styles.memberTextStyle}>OWNER APP</Text>
            <Text style={styles.title}></Text>
          </View>
          <TouchableOpacity onPress={this.props.close}>
            <Image style={styles.image}  source={closeMenuIcon}/>
          </TouchableOpacity>
        </View>
        {this.goToMain('Calender',this.props.goToCalender)}
        {this.goToMain('Barbers', this.props.goToBarbers)}
        {this.goToMain('Reseptionists',this.props.goToReseptionists)}
        {this.goToMain('Customers', this.props.goToCustomers)}
        {this.goToMain('ShopHours',this.props.goToShopHours)}
        {this.goToMain('Invitation',this.props.goToInvitation)}
        {this.goToMain('SIGN OUT',this.props.goToSignOut)}
      </View>
    );
  }
  goToMain(data, props){
    return(
      <TouchableHighlight underlayColor='white' onPress={props} style={styles.menuItem}>
        <Text style ={styles.item}>{data}</Text>
      </TouchableHighlight>
    )
  }
}