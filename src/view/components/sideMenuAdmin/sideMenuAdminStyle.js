import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
  memberTextStyle:{
    color: 'white',
    fontSize:12,
    fontWeight:'900',
    paddingBottom:6
  },
  title:{
    color: '#66cdaa',
    fontSize:11
  },
  image:{
    height:20,
    width:20,
    marginTop:5
  },
  menuHeader:{
  	flexDirection:'row',
  	padding:10, 
  	backgroundColor:'black',
  	justifyContent:'space-between'
  },
  memberDetail:{
  	flexDirection:'column',
  	justifyContent:'space-between'
  },
  menu:{
  	backgroundColor:'white',
  	flex:1
  },
  menuItem:{
  	marginLeft:13,
  	paddingTop:10,
  	paddingBottom:10,
  	borderBottomWidth:0.5,
  	borderBottomColor:'gray'
  },
  item:{
  	color:'black',
  	fontWeight:'700',
  	fontSize:18
  }
});
