import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#efefef'
  },
  tabView:{
  	backgroundColor:'black',
  	color:'white',
  	flexDirection:'row',
  	justifyContent:'flex-start',
  	marginTop:-9.76,
  	borderTopWidth:0.5,
  	borderTopColor:'white',
  	borderStyle:'dotted'
  }
});
