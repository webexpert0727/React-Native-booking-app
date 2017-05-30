import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {height, width} = Dimensions.get('window');
import SignUpRow from '../../components/inputLabel/inputLabel';
import ButtonValue from '../../components/button/buttonValue';
import styles from './addBarberStyle.js';

let profile= require('../../assets/profile.png');
let background= require('../../assets/background.png');
let close= require('../../assets/close.png');
let nameIcon = require('../../assets/name.png');
let emailIcon= require('../../assets/email.png');
let passwordIcon= require('../../assets/password.png');

export default class AddBarbers extends Component {

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
            <Image source={profile} style={styles.imageProfile}/>
            <TouchableOpacity style={styles.closeImage} onPress={()=>{this.closeModal()}}>
                <Image source={close} style={styles.imageClose}/>
            </TouchableOpacity>
            <Text style={styles.textView}>ADD NEW</Text>
            <View style={ styles.barberDetail}> 
                <SignUpRow text="Last Name" image={nameIcon} width={width/2.5}/>
                <SignUpRow text="Email" image={emailIcon} width={width/2.5}/>
                <SignUpRow text="Password" image={passwordIcon} width={width/2.5}/>
            </View>
            <View style={styles.buttons}>
              <ButtonValue value="CANCEL" nextPage={()=>{this._navigateToNext(navigate)}}  width={width/2.5}/>
              <ButtonValue value="CREATE" nextPage={()=>{this._navigateToNext(navigate)}}  width={width/2.5}/>
            </View>
          </Image>
        </View>
    );
  }
}