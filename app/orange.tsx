import React from 'react';
import { View, Text, Image } from 'react-native';

const Orange = () => {
  return (
    <View>
      <Text>Orange</Text>
      <Image source={require('../assets/orange.jpg')} />
    </View>
  );
};

export default Orange;
