import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './buttonValueStyle';

export default class ButtonValue extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity onPress={this.props.nextPage}>
          <View style={styles.buttonView}>
            <Image style={styles.image}  source={this.props.image}/>
            <Text style={[styles.buttonText,{paddingLeft:this.props.image?15:60}]}>{this.props.value}</Text>
          </View>
      </TouchableOpacity>
    )
  }
}