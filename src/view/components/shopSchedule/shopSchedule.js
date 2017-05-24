import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './shopScheduleStyle';

export default class TabLogin extends Component {
  constructor(props){
      super(props)
  }

  render(){
    return(
     	<View style={styles.welcome}>
          <Text style={styles.textTitle}>{this.props.title}</Text>
          <View style={styles.scheduleView}>
            	<View style={[styles.container,{borderRightWidth: 1}]}>
            		<Image source={require('../../assets/calender.png')} style={styles.image} />
            		<View style={styles.textView}>
										<Text style={styles.textFormat}>From:</Text>
										<Text style={styles.textValue}>{this.props.from}</Text>
            		</View>
          		</View>
          		<View style={styles.container}>
            		<Image source={require('../../assets/calender.png')} style={styles.image} />
              		<View style={styles.textView}>
											<Text style={styles.textFormat}>To:</Text>
											<Text style={styles.textValue}>{this.props.to}</Text>
              		</View>
          		</View>
          </View>
    	</View>
    )
  }
}
