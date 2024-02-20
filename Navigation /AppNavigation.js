import { View, Text } from 'react-native';
import React from 'react';

import { ThemeProvider } from 'react-native-ios-kit';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen';

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
            />
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
            />
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default function AppNavigation() {
    return (
        <ThemeProvider>
            <AppStack />
        </ThemeProvider>)
}