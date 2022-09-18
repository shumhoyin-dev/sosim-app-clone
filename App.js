
import utilities from './tailwind.json'
import {TailwindProvider} from 'tailwind-rn'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './screen/CustomDrawerContent'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        {/* <RootNavigator/> */}
        <RootNavigator />
      </NavigationContainer>
      {/* <MainScreen/> */}
    </TailwindProvider>
  );
}
