import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {THEME} from '../theme'

export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.MAIN_COLOR,
        marginBottom: 10
    }, 
    text: {
        color: '#fff'
    }
})