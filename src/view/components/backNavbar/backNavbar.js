import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './backNavbarStyle';

export default class backNavbar extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.titleHeader}>
        <TouchableOpacity onPress={this.props.backPage}>
          <Image style={styles.imageLeft}  source={this.props.imageLeft}/>
        </TouchableOpacity>
        <View style={{flexDirection:'column', alignSelf:'center'}} >
          <Text style={styles.title}>{this.props.text}</Text>
          <Text style={styles.subtitle}>{this.props.columnRow2Text}</Text>
        </View>
        <TouchableOpacity onPress={this.props.action}>
          <Image style={styles.imageRight}  source={this.props.imageRight}/>
        </TouchableOpacity>
      </View>
    )
  }
}