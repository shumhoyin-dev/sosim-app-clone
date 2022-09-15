import React from 'react'
import {View , Text,Pressable} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import { Card, Button, Icon } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DataCard from './DataCard';
import { LinearGradient } from 'expo-linear-gradient';

function Existing() {
    const tw = useTailwind();
  return (
    <View style={tw('pt-5 px-3')}>

        <Pressable style={tw('my-2 px-3 py-3 rounded bg-white items-center')}>
            <View style={tw('w-full flex-row  items-center justify-between mb-1')}>
                <Text >
                    30日/本地數據/FUP 60GB
                </Text>
                <Ionicons name="md-repeat-outline"  size={19} />
            </View>
            <View style={tw('w-full flex-row  items-center justify-between')}>
                <Text style={tw('text-xs text-slate-400')}>
                    2022/09/16 00:14 到期
                </Text>
                <Text style={tw('text-xs text-slate-400')}>
                    $33
                </Text>
            </View>  
        </Pressable>


        
        <Pressable style={tw('my-2 px-3 py-3 rounded bg-white items-center')}>
            <View style={tw('w-full flex-row  items-center justify-between mb-1')}>
                <Text >
                    30日/本地數據/FUP 60GB
                </Text>
                <Ionicons name="md-repeat-outline"  size={19} />
            </View>
            <View style={tw('w-full flex-row  items-center justify-between')}>
                <Text style={tw('text-xs text-slate-400')}>
                    2022/09/16 00:14 到期
                </Text>
                <Text style={tw('text-xs text-slate-400')}>
                    $33
                </Text>
            </View>  
        </Pressable>



        
        <Pressable style={tw('text-center text-white py-2 bg-red-500 rounded-full my-2 ')}>
            <View style={tw('flex-row justify-center items-center')}>
                <MaterialIcons style={tw('text-white mr-3')} name="shopping-basket" size={20} />
                <Text style={tw('text-white')}>
                    購買組合
                </Text>
            </View>
        </Pressable>

        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#273a96', '#0394a8']} style={ tw('rounded-xl h-20 my-3')}>

        </LinearGradient>

        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#273a96', '#0394a8']} style={ tw('rounded-xl h-20 my-3')}>

        </LinearGradient>


    </View>
  )
}

export default Existing