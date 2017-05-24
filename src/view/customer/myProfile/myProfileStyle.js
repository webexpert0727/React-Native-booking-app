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
  details:{
  	paddingLeft:15
  },
  member:{
  	flexDirection:'column',
  	justifyContent:'center',
  	alignItems:'center',
  },
  memberTextStyle:{
    color: 'black',
    fontSize:12,
    fontWeight:'900',
    padding:6
  },
  membershipTextStyle:{
    color: 'black',
    fontSize:11
  },
  hr:{
    borderTopWidth:0.5, 
    borderTopColor:'gray', 
    padding:5, 
    margin:20,
    marginTop:height/2.3
  }
});
