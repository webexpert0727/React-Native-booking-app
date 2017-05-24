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
    borderTopColor:'gray', 
    padding:5, 
    margin:20,
    marginTop:height/1.56
  },
  row:{
  	flexDirection:'row',
  	justifyContent:'space-around',
  	paddingLeft:width/7.5,
  	paddingRight:width/7.5
  },
  image:{
    height:30,
    width:30
  },
  textStyle:{
  	color:"#888888",
  	fontSize:11,
  	padding:6,
  	paddingLeft:10
  },
  textWrap:{
  	alignItems:'center',
  	padding:5
  }
});
