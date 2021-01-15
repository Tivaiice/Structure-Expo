import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import StackNavigation from './Navigation'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "tomato",
        height: Constants.statusBarHeight,
    },
});
/**
* ! Alert...
* ? Should use yarn
* TODO: yarn install
*/
export default class App extends React.Component {
    componentDidMount() {
      StatusBar.setBarStyle('dark-content', true);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.statusBar} />
                    <StackNavigation />
            </View>
        )
    }
}

