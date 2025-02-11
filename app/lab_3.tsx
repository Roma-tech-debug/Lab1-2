import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";


const Lab3 = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      console.log("Incremented to:", newCounter); 
      return newCounter;
    });
  };

  // Decrement function
  const decrement = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter - 1;
      console.log("Decremented to:", newCounter); 
      return newCounter;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <IncrementButton onPress={increment} />
      <DecrementButton onPress={decrement} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 counterText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'red',
    },
  });

export default Lab3;
