import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VacationDestination from './constants/list_items';
import vacationDestinations from './constants/list_items';


// Define the type for the destination items
interface VacationDestination {
  id: number;
  location: string;
  price: number;
  average_yearly_temperature: string;
}

export default function Lab4() {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  // Toggle selection
  const toggleDestination = (id: number) => {
    setSelectedDestinations((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((destinationId) => destinationId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  // Render each destination item
  const renderDestinationItem = ({ item }: { item: VacationDestination }) => (
    <View style={styles.destinationContainer}>
      <Text style={styles.destinationName}>{item.location}</Text>
      <Text>Price: ${item.price.toLocaleString()}</Text> {/* Format the price with commas */}
      <Text>Average Yearly Temperature: {item.average_yearly_temperature}</Text>
      <TouchableOpacity onPress={() => toggleDestination(item.id)} style={styles.checkButton}>
        <Text>{selectedDestinations.includes(item.id) ? '\u2705' : ''}</Text> {/* Show check if selected */}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations} // Use the provided vacationDestinations array
        renderItem={renderDestinationItem}
        keyExtractor={(item: VacationDestination) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  destinationContainer: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkButton: {
    marginTop: 10,
  },
});

