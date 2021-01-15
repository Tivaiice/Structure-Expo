import React from 'react';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';

import HomeScreen from '../../screens/HomeScreen';

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		}
	}
	
	async componentDidMount() {
		await Font.loadAsync({
			CloudBold : require('../../fonts/CloudBold.otf'),
			CloudLight : require('../../fonts/CloudLight.otf'),
		});
		this.setState({ isReady: true });
	}
    
    render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		  }
		return (
			<HomeScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default HomeContainer;
