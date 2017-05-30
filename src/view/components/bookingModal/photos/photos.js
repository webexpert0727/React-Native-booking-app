import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {height, width} = Dimensions.get('window');
import styles from './photosStyle.js';

let photoIcon= require('../../../assets/photo.png');
let background= require('../../../assets/background.png');
let user= require('../../../assets/user.jpg');
let close= require('../../../assets/close.png');

export default class photo extends Component {

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
          <Image source={photoIcon} style={styles.imageProfile}/>
          <TouchableOpacity onPress={()=>{this.closeModal()}} style={styles.imageClose}>
          <Image source={close} style={styles.image}/>
          </TouchableOpacity>
          <Text style={styles.textView}>PHOTOS</Text>
          <View style={styles.images}>
            <Image style={styles.customerImages} source={user}/>
            <Image style={styles.customerImages} source={user}/>
            <Image style={styles.customerImages} source={user}/>
            <Image style={styles.customerImages} source={user}/>
            <Image style={styles.customerImages} source={user}/>
          </View>
        </Image>
      </View>
    );
  }
}