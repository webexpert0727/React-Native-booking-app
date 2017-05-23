import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  	flex:1,
  	backgroundColor:'#000',
  	justifyContent:'center',
  	alignItems:'center'
  },
  midContainer: {
  	flex:1,
  	backgroundColor:'#efefef'
  },
  textLoginField: {
  	backgroundColor:'white',
  	flexDirection: 'row',
  	marginTop:10,
  	justifyContent:'space-around'
  },
  tabBarStyle: {
  	flexDirection:'row',
  	flexWrap:'wrap',
  	margin:10,
  	justifyContent:'space-between'
  },
  imageView: {
  	width:width/2.4,
  	height:height/6
  },
  textColor: {
  	color:'#000',
  	fontWeight:'bold'
  },
  footer: {
  	flexDirection:'row',
  	justifyContent:'center',
  	marginTop:10
  }
});
module.exports = styles;