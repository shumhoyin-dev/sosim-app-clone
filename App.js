
import utilities from './tailwind.json'
import {TailwindProvider} from 'tailwind-rn'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import CustomDrawerContent from './screen/CustomDrawerContent'
import TopNavigator from './navigator/TopNavigator';
import MainContent from './component/MainContent';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
