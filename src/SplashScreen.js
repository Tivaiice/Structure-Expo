/**
 *	Application splashscreen
 */

import React from 'react';
import { View, Text, Image } from 'react-native';

class Splash extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate('Home')
		}, 2000);
	}
	
	render() {
			return (
				<View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
					<Image
						source={require('./images/bg_logo.png')}
						style={{ width: '100%', height: '100%'}}
						resizeMode={'contain'}
					/>
				</View>
			)
	}
}

export default Splash;