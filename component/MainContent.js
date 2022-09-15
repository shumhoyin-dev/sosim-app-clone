import{useState} from 'react'
import {View, ScrollView , StyleSheet, Text} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DataRemain from './DataRemain';
import Roaming from './Roaming';
import Existing from './Existing';

const Tab = createMaterialTopTabNavigator();

function MainContent() {
    const tw = useTailwind();

  return (

    <View style={tw('py-4 px-2')}>
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