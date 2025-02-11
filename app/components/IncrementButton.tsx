import React from "react";
import { Button } from "react-native";

const IncrementButton = ({onPress} : {onPress: () => void}) => {
    return <Button title="Increment" onPress={onPress} />
};

export default IncrementButton;