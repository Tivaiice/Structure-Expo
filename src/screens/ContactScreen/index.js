import React from 'react';
import {StyleSheet,SafeAreaView, View, Text, } from 'react-native';

import Tabbar from '../../components/Tabbar';

const Contact = props => {
    return (        
        <View style={{flex : 1}}>
            <SafeAreaView style={{flex:1}}>
                <View style={styles.boxtxt}>
                    <Text>Contact</Text>
                </View>
            </SafeAreaView>
            <View style={{ flex: 0.09 }}>
                <Tabbar navigation={props.navigation} col={"Contact"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxtxt : {
        alignSelf: 'center'
    }
})

export default Contact;
