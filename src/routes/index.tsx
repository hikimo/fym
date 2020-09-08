import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import MainRoutes from './MainRoutes'

const Routes: React.FC = () => {
  return(
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  )
}

export default Routes