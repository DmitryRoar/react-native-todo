import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import {Navbar} from './src/components/Navbar'
import {MainScreen} from './src/screens/MainScreen.jsx'
import {TodoScreen} from './src/screens/TodoScreen.jsx'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1', title: 'Buy a bread'}
    // {id: '2', title: 'Learn React Native'}
  ])

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      title,
      id: Date.now().toString()
    }])
  }

  const removeTodo = (id) => {
    const candidate = todos.find(todo => todo.id === id)
    Alert.alert(
      'Remove Item',
      `Are your shure remove item "${candidate.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { 
          text: 'Remove', 
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          },
          style: 'destructive'
        }
      ],
      { cancelable: false }
    )
  }

  const updateTodo = (id, title) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (
    <MainScreen 
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  )
  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen 
                goBack={setTodoId.bind(null, null)} 
                todo={selectedTodo}
                onRemove={removeTodo}
                onSave={updateTodo}
              />
  }

  return (
    <View>
      <Navbar title='Todo App On RN' />

      <View style={styles.container}>
        {content}
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
})
