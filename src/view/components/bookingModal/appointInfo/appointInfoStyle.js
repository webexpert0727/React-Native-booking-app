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
		width:width/1.09,
		height: height/3.8,
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
		right: 15,
		top: height/69
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
		fontSize:16
	},
  container: {
    flex:1,
    backgroundColor: '#efefef'
  },
  appointments:{
  	flexDirection:'row',
  	justifyContent:'center',
  	top:height/15,
  	padding:10,
  },
  column:{
  	flexDirection:'column',
  	justifyContent:'space-around',
  	top:13,
  	width:width/3.0,
  	borderRightWidth:0.5,
  	borderRightColor:'black',
  	borderStyle:'dotted'
  },
  text:{
  	fontWeight:'700',
  	color:'black',
  	fontSize:12,
  	alignSelf:'center'
  },
  textValue:{
  	color:'black',
  	fontSize:12,
  	alignSelf:'center'
  }
});
