import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from '../components/DrawerMenu';

import HomeScreen from '../screens/HomeScreen';

import colors from '../config/colors';

const Drawer = createDrawerNavigator();

const RootRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={({ navigation }) => {
      return <DrawerMenu navigation={navigation} />
    }}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
);

export default RootRoutes
