import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import DrawerRoutes from './DrawerRoutes';
import SplashScreen from '../screens/SplashScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const MainRoutes: React.FC = () => {
  return(
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Root" component={DrawerRoutes} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainRoutes;