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
  calender: {
    zIndex:99,
    position: 'absolute',
    width:width/1.5,
    height:width/1.3,
    right: 30,
    top: 50,
  },
  tabView:{
  	backgroundColor:'black',
  	flexDirection:'row',
  	justifyContent:'flex-start',
  	marginTop:-9.76,
  	borderTopWidth:0.5,
  	borderTopColor:'white',
  	borderStyle:'dotted'
  }
});
