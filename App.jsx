import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Pressable, SafeAreaView } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Superheroes</Text>
      
      <Image 
        style={styles.image}
        source={require('./ironman.jpg')} // Ensure this file exists in the correct path
      />

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Button Pressed!")}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>

      <Pressable style={styles.pressable}>
        <Text style={styles.pressableText}>Pressable</Text>
      </Pressable>  
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  pressable: {
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 5,
  },
  pressableText: {
    fontSize: 16,
  },
});
