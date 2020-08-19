import React from 'react'
import {StyleSheet, View, FlatList, Image, Text} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'

export const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
  let content = <>
    <FlatList
      data={todos}
      renderItem={({item}) => <Todo todo={item} onOpen={openTodo} removeTodo={removeTodo} />}
      keyExtractor={(item) => item.id}
    />
  </>

  if (!todos.length) {
    content = <View style={styles.imgWrap}>
      {/* <Image 
        source={require('../../assets/angular.png')} 
        style={styles.img}
      /> */}
      <Image 
        source={{
          uri: 'https://hackernoon.com/hn-images/1*Mg2_ol3Ko2l3QfUURUA-2Q.jpeg'
        }} 
        style={styles.img}
      />
      <Text>:)</Text>
    </View>
  }

  return (
      <View>
        <AddTodo addTodo={addTodo} />
        {content}
      </View>
  )
}

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 300
  },
  img: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  }
})