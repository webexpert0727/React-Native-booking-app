import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  buttonText:{
    color:'#fff',
    paddingRight:width/10,
    padding:10,
    fontWeight:'bold',
    fontSize:16
  }
});
