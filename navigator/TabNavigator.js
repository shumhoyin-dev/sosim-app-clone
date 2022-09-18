import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Purchase from '../screen/Purchase';



import MainScreen from '../screen/MainScreen';

function TabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator  
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",

      }}>
        <Tab.Screen name="Home" component={MainScreen} 
            options={{
                tabBarLabel: '主頁',
                tabBarIcon: () => (
                  <MaterialIcons name="home"  size={20} />
                ),
              }}
        />
       
        <Tab.Screen name="Purchase" component={Purchase} 
            options={{
            tabBarLabel: '購買組合',
            tabBarIcon: () => (
              <MaterialIcons name="shopping-basket" size={20} />
            ),
        }}/>
        
        <Tab.Screen name="Gift" component={MainScreen} 
            options={{
                tabBarLabel: '獎賞',
                tabBarIcon: () => (
                  <MaterialIcons name="wallet-giftcard"  size={20} />
                ),
              }}
        />
        
        <Tab.Screen name="Message" component={MainScreen} 
            options={{
                tabBarLabel: '信息',
                tabBarIcon: () => (
                  <MaterialIcons name="message"  size={20} />
                ),
              }}
        />

        <Tab.Screen name="Settings" component={MainScreen} 
            options={{
                tabBarLabel: '設定',
                tabBarIcon: () => (
                  <Ionicons name="settings-outline" size={20} />
                ),

              }}
        />


      </Tab.Navigator>
  )
}

export default TabNavigator