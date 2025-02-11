import React from 'react';
import { View, Text, Image } from 'react-native';

const Apple = () => {
  return (
    <View>
      <Text>Apple</Text>
      <Image source={require('../assets/apple.png')} />
    </View>
  );
};

export default Apple;



