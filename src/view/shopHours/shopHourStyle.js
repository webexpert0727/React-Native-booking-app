import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  	flexDirection:'row',
  	backgroundColor: '#000',
  },
  imageView: {
  	height:20,
  	width:30
  },
  forgotView: {
  	alignSelf:'center',
  	marginTop: 10,
  },
  forgotPass: {
  	color: '#2ad5a3',
  	fontWeight: 'bold'
  },
  footer: {
  	alignItems:'center',
  	justifyContent:'center',
  	alignSelf:'stretch',
  	position: 'absolute',
  	bottom: 0,
  	right: 0,
  	left: 0,
  	height: width/8,
  	backgroundColor: '#2ad5a3',
  },
  footerText: {
  	color: '#fff',
  	fontSize: 16,
  	fontWeight: 'bold',
  	fontFamily: "Helvetica Neue Cyr"
  }
});
module.exports = styles;