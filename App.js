import React from 'react'
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>    
    <Text style={styles.title}>hola peru</Text>
    <Image 
      source={{uri: 'https://picsum.photos/200/200'}}
      style={styles.image} 
    />
    <Button
      color='#000'
      title='presioname'
      onPress={() => Alert.alert('hola a todos')}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'cyan'
  },
  title: {
    fontSize: 30, 
    color:'white'
  },
  image: {
    height:200, 
    width: 200
  }
})


export default App
















