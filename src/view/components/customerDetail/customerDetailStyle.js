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
    backgroundColor: '#efefef',
    paddingLeft:15,
    marginBottom:3,
    padding:4
  },
  rowColumnFirst:{
    paddingRight:21,
    paddingLeft:0,
    width:width/2.5
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
