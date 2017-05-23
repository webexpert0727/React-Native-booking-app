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
              <Image
                style={styles.image}
                source={require('../../assets/arrow.png')}
              />
          </TouchableOpacity>
          <View >
              <Text style={styles.title}>{this.props.text}</Text>
          </View>
          <View></View>
      </View>
    )
  }
}