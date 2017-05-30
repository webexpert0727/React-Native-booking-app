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
		height: height/3.5,
	},
	imageProfile: {
		borderColor: '#ffffff',
		borderRadius: 30,
		borderWidth: 4,
		width: 60,
		height: 60,
		top: -5,
		alignSelf: 'center',
		position: 'absolute',
		zIndex:100
	},
	imageClose: {
		position: 'absolute',
		right: 15,
		top: 35
	},
	image:{
		height: 18,
		width: 18
	},
	textView: {
		textAlign: 'center',
		top: 65,
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
  	top:50,
  	padding:10,
  },
  button:{
  	flexDirection:'row',
  	justifyContent:'space-around',
  	top:65
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
