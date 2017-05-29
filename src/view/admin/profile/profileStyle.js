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
  title:{
    fontSize:12,
    fontWeight:'700',
    color: 'black',
    paddingTop:12,
    paddingBottom:12
  },
  customerImages:{
  	width:width/3.2,
  	height:width/3.2,
  	margin:3
  },
  images:{
  	flexDirection:'row',
  	flexWrap: 'wrap'
  }
});
