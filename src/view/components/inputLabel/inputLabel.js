import React, {Component} from 'react'
import {View, Text,TextInput, Dimensions, StyleSheet, Image} from 'react-native';
import styles from './inputLabelStyle';

const {height, width} = Dimensions.get('window');

export default class inputLable extends Component {
  constructor(props) {
    super(props);
    this.state = { invitationCode: '',
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:'',
      password:'',
      confirmPassword:''
    };
  }
  

  render(){
    let row = this.props.text;
    return(
      <View style={styles.row}>
          <View style={styles.rowColumnFirst}>
              <Text style={styles.textStyle}>{this.props.text}</Text>
          </View>
          <View style={styles.row}>
              <TextInput
                underlineColorAndroid='rgba(0,0,0,0)'
                underlineColorios= 'rgba(0,0,0,0)'
                style={{width:this.props.width, height: height/17}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.row}
                placeholder={this.props.placeInput}
              />
              <Image style={styles.image}  source={this.props.image}/>
          </View>
      </View>
    )
  }
}