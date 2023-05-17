import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Home from '../pages/Home'

const App = () => {
    return (
        <View style={styles.container}>
            <Home />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Home