import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Akademik Takvim</Text>
      <Button title="Takvime Git" onPress={() => navigation.navigate('Takvim')} />
    </View>
  );
}