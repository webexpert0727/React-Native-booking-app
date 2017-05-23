import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
	tabView: {
		borderRadius:15,
		borderWidth:1,
		marginTop:10
	},
	textView: {
		color:'#000',
		paddingLeft:30,
		paddingRight:30,
		padding:5
	}
});

module.exports = styles;