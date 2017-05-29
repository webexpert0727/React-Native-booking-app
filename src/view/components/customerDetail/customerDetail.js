import React, {Component} from 'react'
import {View, Text,TextInput, Dimensions, StyleSheet, Image} from 'react-native';
import styles from './customerDetailStyle';

const {height, width} = Dimensions.get('window');

export default class customerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  

  render(){
    let row = this.props.text;
    return(
      <View style={styles.row}>
        <View style={styles.rowColumnFirst}>
          <View style={{flexDirection:'column'}}>
	          <Text style={styles.textStyle}>{this.props.name}</Text>
	          <Text style={[styles.textStyle,{color:'gray'}]}>{this.props.email}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <TextInput
            underlineColorAndroid='rgba(0,0,0,0)'
            underlineColorios= 'rgba(0,0,0,0)'
            style={{width:this.props.width, height: height/17}}
          />
          <Image style={styles.image}  source={this.props.image}/>
        </View>
      </View>
    )
  }
}