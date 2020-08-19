import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export const Todo = ({todo, removeTodo, onOpen}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.6} 
        onPress={onOpen.bind(null, todo.id)}
        onLongPress={removeTodo.bind(null, todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10
    }
})