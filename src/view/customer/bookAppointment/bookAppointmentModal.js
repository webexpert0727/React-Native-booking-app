import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {height, width} = Dimensions.get('window');
import ButtonValue from '../../components/button/buttonValue';
import styles from './bookAppointmentModalStyle.js';

let serviceIcon= require('../../assets/service.png');
let background= require('../../assets/background.png');
let checkboxIcon= require('../../assets/checkbox.png');
let checkbox_activeIcon= require('../../assets/checkbox_active.png');
let close= require('../../assets/close.png');

export default class bookAppointmentModal extends Component {

  constructor(props) {
    super(props);
    this.state={
    	cut:true,
    	shave:false
    }
  }

  onCut(){
    this.setState({shave:false})
    this.setState({cut:true})
  }
  onShave(){
    this.setState({cut:false})
    this.setState({shave:true})
  }
  closeModal(){
    this.props.onClose(false)
  }

  render() {

    return (
        <View style={styles.position}>
          <Image style={styles.modalContainer} source={background}>
            <Image source={serviceIcon} style={styles.imageProfile}/>
            <TouchableOpacity onPress={()=>{this.closeModal()}} style={styles.imageClose}>
            <Image source={close} style={styles.image}/>
            </TouchableOpacity>
            <Text style={styles.textView}>PICK A SERVICE</Text>
            <View style={ styles.services}>
            	<View style={[styles.services,{borderRightWidth:0.5,borderRightColor:'black', borderStyle:'dotted',paddingRight:39}]}>
            		<TouchableOpacity onPress={()=>{this.onCut()}} style={styles.checkboxSpacing}>
	            		<Image source={this.state.cut?checkbox_activeIcon:checkboxIcon}  style={styles.checkbox}/>
	            	</TouchableOpacity>
	            	<Text >Cut</Text>
	            </View>
	            <View style={[styles.services,{paddingLeft:39}]}>
            		<TouchableOpacity onPress={()=>{this.onShave()}} style={styles.checkboxSpacing}>
	            		<Image source={this.state.shave?checkbox_activeIcon:checkboxIcon} style={styles.checkbox}/>
	            	</TouchableOpacity>
	            	<Text >Shave</Text>
	            </View>
            </View>
            <View style={ styles.button}>
          		<ButtonValue value="BOOK IT" />
          	</View>
          </Image>
        </View>
    );
  }
}