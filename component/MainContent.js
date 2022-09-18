import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import DataRemain from './DataRemain';
import Existing from './Existing';
import Roaming from './Roaming';

const Tab = createMaterialTopTabNavigator();

function MainContent() {
    const tw = useTailwind();

  return (

    <View style={tw('py-4 px-2')}>

      <View style={(tw('w-full px-2 py-1'))}>
        <Image source={{uri:'https://i.imgur.com/GImvG4q.jpg'}} style={(tw('rounded w-full h-24'))}/>
        <View style={tw('flex-row justify-center items-center py-2')}>
            <View style={{ borderRadius: 5,borderWidth: 4, borderColor: 'red',marginRight:'0.5rem'}}/>
            <View style={{ borderRadius: 5,borderWidth: 4, borderColor: 'rgb(71, 85, 105)',marginRight:'0.5rem'}}/>
            <View style={{ borderRadius: 5,borderWidth: 4, borderColor: 'rgb(71, 85, 105)',marginRight:'0.5rem'}}/>
            <View style={{ borderRadius: 5,borderWidth: 4, borderColor: 'rgb(71, 85, 105)',marginRight:'0.5rem'}}/>
            <View style={{ borderRadius: 5,borderWidth: 4, borderColor: 'rgb(71, 85, 105)'}}/>
          </View>
      </View>



      <Tab.Navigator
       screenOptions={{
        tabBarStyle: {backgroundColor:'transparent'},
        tabBarItemStyle:{padding:0,margin:0},
        tabBarLabelStyle:{padding:0,margin:0},
      }}
      >
        <Tab.Screen name="Data" component={DataRemain}  options={{
                tabBarLabel: '本地服務',
              }}/>
        <Tab.Screen name="Travel" component={Roaming}  options={{
                tabBarLabel: '外遊服務',
              }}/>
        <Tab.Screen name="Existing" component={Existing}  options={{
                tabBarLabel: '現時有效組合',
              }}/>
      </Tab.Navigator>
    </View>


  )
}

export default MainContent