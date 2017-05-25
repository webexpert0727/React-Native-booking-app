import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './appointmentScheduleStyle';

export default class appointmentSchedule extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity onPress={this.props.nextPage}>
			  <View style={styles.row}>
				  <View style={styles.column} >
				    <Text style={styles.timeText}>{this.props.time}</Text>
				    <Text style={styles.timeText}>am</Text>
				  </View>
				  <View style={styles.column} >
				    <Text style={styles.nameText}>{this.props.timeAvailabilityOrName}</Text>
				    <Text style={styles.serviceText}>{this.props.openOrService}</Text>
				  </View>
			  </View>
      </TouchableOpacity>
    )
  }
}