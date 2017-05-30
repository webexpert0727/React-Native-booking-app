import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
	tabView: {
		borderRadius:15,
		borderWidth:1,
		marginTop:10,
		marginLeft:5,
		width:width/3.4
	},
	textView: {
		color:'#000',
		padding:5,
		alignSelf:'center'
	}
});

module.exports = styles;