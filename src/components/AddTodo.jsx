import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native'
import {THEME} from '../theme'

export const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            addTodo(value)
            setValue('')
        } else {
            Alert.alert('Todo haven\'t empty')
        }
    } 

    return (
        <View style={styles.block}>
          <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={setValue}
          placeholder='Enter Todo'
          autoCorrect={false}
          autoCapitalize='words'
          />
          <Button title='Add' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})