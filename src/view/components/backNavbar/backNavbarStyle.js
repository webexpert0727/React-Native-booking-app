import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  imageLeft:{
    height:18,
    width:30
  },
  title:{
    fontSize:12,
    fontWeight:'700',
    color: '#ffffff'
  },
  titleHeader:{
    flexDirection:'row',
    justifyContent: 'space-between', 
    padding:15,
    marginBottom:10, 
    backgroundColor:'black',
    alignItems:'center'
  },
  imageRight:{
    height:30,
    width:30
  },
});
