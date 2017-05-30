import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {height, width} = Dimensions.get('window');

module.exports = StyleSheet.create({
	position: {
		position:'absolute',
		backgroundColor:'#000000af',
		left:0,
		top:0,
		bottom:0,
		right:0,
		alignItems:'center',
		justifyContent:'center'
	},
	modalContainer: {
		position:'absolute',
		width:width/1.2,
		height: height/2.8,
	},
	imageProfile: {
		borderColor: '#ffffff',
		borderRadius: 30,
		borderWidth: 4,
		width: 60,
		height: 60,
		top: -height/20,
		alignSelf: 'center',
		position: 'absolute',
		zIndex:100
	},
	imageClose: {
		position: 'absolute',
		right: 10,
		top: height/35
	},
	image:{
		height: 18,
		width: 18
	},
	textView: {
		textAlign: 'center',
		top: height/15,
		color: '#000',
		fontWeight: 'bold',
		fontSize:17
	},
  container: {
    flex:1,
    backgroundColor: '#efefef'
  },
  services:{
  	flexDirection:'row',
  	justifyContent:'center',
  	top:height/27,
  	padding:10
  },
  button:{
  	top:height/10
  },
  checkbox:{
  	width:20,
  	height:20
  },
  checkboxSpacing:{
  	paddingRight:15
  }
});
