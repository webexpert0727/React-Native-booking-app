import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './tabStyle';

export default class TabLogin extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
    		  <TouchableOpacity>
               <View style={[styles.tabView,{backgroundColor:this.props.color}]}>
                    <Text style={[styles.textView,{color:this.props.textColor}]}>{this.props.text}</Text>
                </View>
          </TouchableOpacity>
        )
    }
}
