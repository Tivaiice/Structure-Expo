import React from 'react';
import {StyleSheet,SafeAreaView, View, Text, } from 'react-native';

import Tabbar from '../../components/Tabbar';

const Home = props => {
    return (        
        <View style={{flex : 1}}>
            <SafeAreaView style={{flex:10 ,backgroundColor : '#DAFF66'}}>
                <View style={styles.boxtxt}>
                    <Text>Home</Text>
                </View>
            </SafeAreaView>
            <View style={{ flex: 1}}>
                <Tabbar navigation={props.navigation} col={"Home"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxtxt : {
        alignSelf: 'center'
    }
})

export default Home;
