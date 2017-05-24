import React, {Component} from 'react'
import {View, TouchableOpacity,Text} from 'react-native';
import styles from './linkablePanelStyle';

export default class inputLable extends Component {
  render(){
    return(
      <View style={styles.column}>
        <TouchableOpacity>
          <View style={styles.row}>
          	<Text style={styles.textStyle}>{this.props.text}</Text>
          	<Text style={styles.textValueStyle}>{this.props.textValue}</Text>
      		</View>
        </TouchableOpacity>
      </View>
    )
  }
}