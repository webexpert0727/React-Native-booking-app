import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  column: {
    flexDirection:'column',
    justifyContent:'flex-start',
    paddingTop:15,
    paddingBottom:15,
    borderBottomWidth:0.5,
    borderBottomColor:'gray'
  },
  panel:{
  	flex:1
  },
  textStyle:{
    color: 'black',
    fontSize:11,
    fontWeight:'bold',
    width:width/4
  },
  textValueStyle:{
    fontSize:11
  },
  row:{
    flexDirection:'row',
    justifyContent:'flex-start'
  }
});
