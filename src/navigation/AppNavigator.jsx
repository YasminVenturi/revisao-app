import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={HomeScreen}
        options={{
          title: "Página inical",
          headerShown: false,
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;