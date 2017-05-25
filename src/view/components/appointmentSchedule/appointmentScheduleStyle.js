import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  row:{
    flexDirection:'row'
  },
  column:{
    flexDirection:'column',
    borderRadius:25,
    height:50,
    width:50,
    backgroundColor:'#7fffd4'
  },
  timeText:{
	fontSize:15,
	color:'white'
  },
  nameText:{
    color: 'black',
    fontSize:12,
    fontWeight:'900',
    padding:6
  },
  serviceText:{
    color: 'gray',
    fontSize:11
  },
});
