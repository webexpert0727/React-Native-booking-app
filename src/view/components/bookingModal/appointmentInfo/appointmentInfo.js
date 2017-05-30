import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {height, width} = Dimensions.get('window');
import ButtonValue from '../../button/buttonValue';
import styles from './appointmentInfoStyle.js';

let infoIcon= require('../../../assets/info.jpg');
let background= require('../../../assets/background.png');
let profileIcon= require('../../../assets/profile.png');
let notesIcon= require('../../../assets/profile_date.png');
let close= require('../../../assets/close.png');

export default class appointmentInfo extends Component {

  constructor(props) {
    super(props);
    this.state={
    }
  }

  closeModal(){
    this.props.onClose(false)
  }

  render() {
    return (
      <View style={styles.position}>
        <Image style={styles.modalContainer} source={background}>
          <Image source={infoIcon} style={styles.imageProfile}/>
          <TouchableOpacity onPress={()=>{this.closeModal()}} style={styles.imageClose}>
          <Image source={close} style={styles.image}/>
          </TouchableOpacity>
          <Text style={styles.textView}>APPOINTMENT INFO</Text>
          <View style={[styles.appointments,styles.appointmentRow]}>
            <View style={styles.column} >
              <Text style={styles.text}>Time</Text>
              <Text style={styles.textValue}>10:am-11:am</Text>
            </View>
            <View style={styles.column} >
              <Text style={styles.text}>Service</Text>
              <Text style={styles.textValue}>Cut & Shave</Text>
            </View>
            <View style={[styles.column,{borderRightWidth:0}]} >
              <Text style={styles.text}>Barber</Text>
              <Text style={styles.textValue}>Barber1</Text>
            </View>
          </View>
          <Text style={styles.textView}>CUSTOMER</Text>
          <View style={[styles.appointments,{margin:10}]}>
            <View style={[styles.column,{paddingLeft:15}]} >
              <Text style={styles.text}>Email</Text>
              <Text style={styles.textValue}>user1@test.com</Text>
            </View>
            <View style={styles.column} >
              <Text style={styles.text}>Name</Text>
              <Text style={styles.textValue}>Name1 Lastname1</Text>
            </View>
            <View style={[styles.column,{borderRightWidth:0}]} >
              <Text style={styles.text}>Phone</Text>
              <Text style={styles.textValue}>25452525</Text>
            </View>
          </View>
          <View style={ styles.button}>
            <ButtonValue value="PROFILE" image={profileIcon} width={width/2.5}/>
            <ButtonValue value="NOTES" image={notesIcon} width={width/2.5} />
          </View>
        </Image>
      </View>
    );
  }
}