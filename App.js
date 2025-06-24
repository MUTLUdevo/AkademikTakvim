import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>📚 AkademikTakvim</Text>
      <Button title="📅 Takvime Git" onPress={() => navigation.navigate('Takvim')} />
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>📌 Takvim ekranı burada olacak</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
        <Stack.Screen name="Takvim" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
