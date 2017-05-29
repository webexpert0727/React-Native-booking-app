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
  tabView: {
		borderRadius:15,
		borderWidth:1
	},
	textView: {
		paddingLeft:30,
		paddingRight:30,
		padding:5
	},
	tab:{
		flexDirection:'row',
		justifyContent:'center',
		marginBottom:15
	}
});
