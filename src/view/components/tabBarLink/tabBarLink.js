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
        <Text style={styles.buttonText}>{this.props.value}</Text>
      </TouchableOpacity>
    )
  }
}