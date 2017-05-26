import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'flex-start',
    padding:13,
    marginTop:1.5,
    marginBottom:1.5,
    backgroundColor:'white'
  },
  timeColumn:{
    flexDirection:'column',
    borderRadius:25,
    height:48,
    width:48,
    backgroundColor:'#3cb371',
    padding:5,
    alignItems:'center'
  },
  detailColumn:{
    flexDirection:'column',
    height:20
  },
  timeText:{
	fontSize:13,
	color:'white'
  },
  nameText:{
    color: 'black',
    fontSize:12,
    fontWeight:'900'
  },
  serviceText:{
    color: 'gray',
    fontSize:11
  },
  column:{
    width:width/6
  }
});
