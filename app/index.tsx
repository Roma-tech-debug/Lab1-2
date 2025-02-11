import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';



const Index = () => {
    const  router  = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my app</Text>
        <Button title="mango" onPress={() => router.push("/mango")} />
        <Button title="apple" onPress={() => router.push("/apple")} />
        <Button title="orange" onPress={() => router.push("/orange")} />
        <Button title="Go to Lab 3" onPress={() => router.push("/lab_3")} />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Index;
// export { apple, mango, orange };


