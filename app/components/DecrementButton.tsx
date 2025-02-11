import React from 'react';
import { Button } from 'react-native';

const DecrementButton = ({ onPress }: { onPress: () => void }) => {
  return <Button title="Decrement" onPress={onPress} />;
};

export default DecrementButton;
