import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {View , Text} from 'react-native'

function TestApp(){

    return (
        <View>
            <Text>
                asdfaf
            </Text>
        </View>
    )
}

function TopNavigator() {
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
       screenOptions={{
        tabBarStyle: {backgroundColor:'transparent'},
        tabBarItemStyle:{padding:0,margin:0},
        tabBarLabelStyle:{padding:0,margin:0},
      }}
      >
        <Tab.Screen name="Data" component={TestApp}  options={{
                tabBarLabel: '本地服務',
              }}/> 

      </Tab.Navigator>
  )
}

export default TopNavigator