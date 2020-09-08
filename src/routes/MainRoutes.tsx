import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import HomeScreen from '../screens/HomeScreen'
import SplashScreen from '../screens/SplashScreen'

const Stack = createStackNavigator();

const MainRoutes: React.FC = () => {
  return(
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  )
};

export default MainRoutes;