
import utilities from './tailwind.json'
import {TailwindProvider} from 'tailwind-rn'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { View , Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './screen/CustomDrawerContent'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        {/* <RootNavigator/> */}
        <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} /> }
        screenOptions={{
          headerShown:false,
          drawerStyle:{
            width:'100%'
          }
        }}
          
        >
          <Drawer.Screen name="Main" component={RootNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* <MainScreen/> */}
    </TailwindProvider>
  );
}
