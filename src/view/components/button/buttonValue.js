import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,Dimensions} from 'react-native';
import styles from './buttonValueStyle';

const {height, width} = Dimensions.get('window');

export default class ButtonValue extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity onPress={this.props.nextPage}>
        <View style={[styles.buttonView,{width:this.props.image?width/1.7:width/2.7}]}>
          <Image style={styles.image}  source={this.props.image}/>
          <Text style={styles.buttonText}>{this.props.value}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}