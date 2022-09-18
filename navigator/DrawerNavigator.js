import React from 'react'
import StackNavigator from './StackNavigator';
import  {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawerContent from '../screen/CustomDrawerContent';
  

function DrawerNavigator() {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} /> }
        screenOptions={{
        headerShown:false,
        drawerStyle:{
            width:'100%'
        }
        }} >
        <Drawer.Screen name="Root" component={StackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator