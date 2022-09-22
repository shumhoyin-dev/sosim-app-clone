import React from 'react'
import {View , Text,Pressable} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import { Card, Button, Icon } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DataCard from './DataCard';
import { LinearGradient } from 'expo-linear-gradient';

function DataRemain() {
    const tw = useTailwind();
  return (
        <View style={{flex:1}}>
                <View style={tw('py-4  px-3 ')}>
        <Text style={tw('text-sm ')}>
            用量結餘
        </Text>

        <DataCard  title='本地數據' desc="" usage="59.87GB" total="60GB"/>
        <DataCard  title='語音通話' desc="" usage="59.87" total="60分鐘"/>
        <DataCard  title='網內短訊' desc="" usage="500" total="500"/>

        <Pressable style={tw('text-center text-white py-2 rbg-red-500 rounded-full my-2 ')}>
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
        </View>
  )
}

export default DataRemain