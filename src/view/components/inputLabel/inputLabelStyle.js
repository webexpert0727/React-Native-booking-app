import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingLeft:15,
    marginBottom:3,
  },
  rowColumnFirst:{
    borderRightColor:'gray',
    paddingRight:21,
    paddingLeft:0,
    width:width/3.2
  },
  image:{
    height:20,
    width:20
  },
  textStyle:{
    color: 'black',
    fontSize:11,
    fontWeight:'bold'
  }
});
