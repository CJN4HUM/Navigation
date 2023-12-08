import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';
import AccountRecoveryScreen from './components/AccountRecoveryScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home screen options
function HomeScreenOptions({ navigation }) {
 return {
    headerRight: () => (
      <Icon.Button
        name="log-out"
        size={25}
        color="#666666"
        backgroundColor="transparent"
        onPress={() => navigation.navigate('Landing')}
      />
    ),
 };
}

// Home tab navigator
function HomeTabNavigator() {
 return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={HomeScreenOptions} />
    </Tab.Navigator>
 );
}

// App function
export default function App() {
 return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="AccountRecovery" component={AccountRecoveryScreen} />
        <Stack.Screen name="HomeScreen" component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
 );
}