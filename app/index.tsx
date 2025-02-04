import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';


const Index = () => {
    const  router  = useRouter();
  return (
    <View>
      <Text>Welcome to my fruit shop</Text>
        <Button title="mango" onPress={() => router.push("/mango")} />
        <Button title="apple" onPress={() => router.push("/apple")} />
        <Button title="orange" onPress={() => router.push("/orange")} />

    </View>
  );
};

export default Index;
// export { apple, mango, orange };


