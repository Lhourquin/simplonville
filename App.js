// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen } from './components/HomeScreen';
import { FormScreen } from './components/form/FormScreen';
import { MapScreen } from './components/MapScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Form" component={FormScreen} />
        {/* <Tab.Screen name="Map" component={MapScreen}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;