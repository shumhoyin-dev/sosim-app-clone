import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Quota from '../component/Quota';
import TabNavigator from './TabNavigator';

function StackNavigator() {
    const StackNavigator = createStackNavigator();
    return (
    <StackNavigator.Navigator 
    >
      <StackNavigator.Group screenOptions={{
        headerShown: false,
      }}>
        <StackNavigator.Screen name="Main" component={TabNavigator} />
      </StackNavigator.Group>

      <StackNavigator.Group screenOptions={{ presentation: 'modal',headerShown: false, }}>
        <StackNavigator.Screen name="Quota" component={Quota} />
      </StackNavigator.Group>

    </StackNavigator.Navigator>
  )
}

export default StackNavigator