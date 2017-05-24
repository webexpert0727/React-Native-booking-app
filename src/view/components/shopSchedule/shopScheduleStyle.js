import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
	welcome: {
		backgroundColor:'#fff',
		marginTop: 3,
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 20,
		paddingLeft: 20,
		borderColor: '#D3D3D3',
		borderStyle: 'dashed'
	},
	scheduleView: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: 20
	},
	textTitle: {
		textAlign: 'center',
		padding: 10,
		fontSize: 13,
		color: '#000',
		fontWeight: 'bold'
	},
	image: {
		borderWidth: 2,
		borderColor: '#2ad5a3',
		borderRadius: 15,
		width: 20,
		height: 20,
		marginTop: 5
	},
	textView: {
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'column',
		borderColor: '#000'
	},
	textFormat: {
		fontWeight: '300',
		fontSize: 12
	},
	textValue: {
	 	fontFamily: 'Arial',
		fontSize: 12,
		color: '#000',
		fontWeight: '400'
	}
});

module.exports = styles;