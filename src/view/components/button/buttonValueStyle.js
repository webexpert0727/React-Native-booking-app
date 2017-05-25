import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  buttonView:{
    backgroundColor:'#000',
    alignItems:'center',
    alignSelf:'center',
    shadowColor: '#323232',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1.0,
    flexDirection:'row',
    justifyContent:'center'
  },
  buttonText:{
    color:'#fff',
    padding:10,
    fontWeight:'bold'
  },
  image:{
    height:15,
    width:22
  }
});
