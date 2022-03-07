import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigator} from './StackNavigator';
import {SearchScreen} from '../screens/SearchScreen';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={StackNavigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name={'list-outline'} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name={'search-outline'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
