import React from 'react';
import { View, Text, Image } from 'react-native';

const Mango = () => {
  return (
    <View>
      <Text>Mango</Text>
     <Image source={require('../assets/mango.jpg')} /> 
    </View>
  );
};

export default Mango;
