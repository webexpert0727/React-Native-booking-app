import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  buttonText:{
    color:'#fff',
    marginRight:width/10,
    marginLeft:14,
    paddingTop:5,
    paddingBottom:5,
    fontWeight:'bold',
    fontSize:16,
    borderBottomWidth:3
  }
});
