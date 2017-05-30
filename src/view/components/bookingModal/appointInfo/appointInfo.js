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
import styles from './appointInfoStyle.js';

let infoIcon= require('../../../assets/info.jpg');
let background= require('../../../assets/background.png');
let close= require('../../../assets/close.png');

export default class appointInfo extends Component {

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
          <View style={styles.appointments}>
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
        </Image>
      </View>
    );
  }
}