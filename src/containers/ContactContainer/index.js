import React from 'react';

import ContactScreen from '../../screens/ContactScreen';

class ContactContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
    
    render() {

		return (
			<ContactScreen
				setComponentState={this._setState}
				navigation={this.props.navigation}
			/>
		);
	}
}

export default ContactContainer;
