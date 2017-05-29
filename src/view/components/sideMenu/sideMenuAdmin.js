import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './sideMenuStyle';

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
        {this.goToMain('CALENDER',this.props.goToCalender)}
        {this.goToMain('BARBERS', this.props.goToBarbers)}
        {this.goToMain('RESEPTIONISTS',this.props.goToReseptionists)}
        {this.goToMain('CUSTOMERS', this.props.goToCustomers)}
        {this.goToMain('SHOP HOURS',this.props.goToShopHours)}
        {this.goToMain('INVITATION',this.props.goToInvitation)}
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