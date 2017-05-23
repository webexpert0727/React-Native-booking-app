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
  hr:{
    borderTopWidth:0.5, 
    borderTopColor:'black', 
    padding:5, 
    margin:20,
    marginTop:width/3
  }
});
