import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
