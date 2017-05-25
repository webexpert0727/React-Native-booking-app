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

export default class sideMenu extends Component {
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
            <Text style={styles.memberTextStyle}>NAME1 LASTNAME1</Text>
            <Text style={styles.title}>View Profile</Text>
          </View>
          <TouchableOpacity onPress={this.props.close}>
            <Image style={styles.image}  source={closeMenuIcon}/>
          </TouchableOpacity>
        </View>
        {this.goToMain('Home',this.props.goToHome)}
        {this.goToMain('BOOK APPOINTMENT', this.props.goToBookAppointent)}
        {this.goToMain('UPLOAD PHOTO',this.props.goToUploadPhoto)}
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