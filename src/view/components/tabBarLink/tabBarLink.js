import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './tabBarLinkStyle';

export default class tabBarLink extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity onPress={this.props.nextPage}>
        <Text style={[styles.buttonText,{borderBottomColor:this.props.active?'#7fffd4':'black'}]}>{this.props.value}</Text>
      </TouchableOpacity>
    )
  }
}