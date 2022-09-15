import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';




import MainScreen from '../screen//MainScreen';
import { useTailwind } from 'tailwind-rn/dist';


  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
function RootNavigator() {
    const Tab = createBottomTabNavigator();
    const tw = useTailwind();
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
       
        <Tab.Screen name="Purchase" component={SettingsScreen} 
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

export default RootNavigator