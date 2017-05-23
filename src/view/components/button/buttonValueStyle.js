import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

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
  },
  buttonText:{
   color:'#fff',
   paddingLeft:60,
   paddingRight:60,
   padding:10,
   fontWeight:'bold'
  }
});
