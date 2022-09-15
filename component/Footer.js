import React from 'react'
import {View , Text, Pressable} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

function Footer() {
    const tw = useTailwind();
    const onPressFunction = () =>{
        alert("hi")
    }
    
  return (
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#273a96', '#0394a8']} style={
            tw('py-1 px-5 flex-row items-center justify-between')}>
            <View>
                <View style={tw('flex-row items-center')}>
                    <Text style={tw('text-white')}>
                        餘額
                    </Text>
                    <View style={tw('ml-3')}>
                        <Icon style={tw('text-white')} name="info" size={15} />
                    </View>
                </View>
                <View>
                    <Text style={tw('text-2xl w-full text-white')}>
                        $33.00
                    </Text>
                </View> 
            </View>

            <Pressable onPress={onPressFunction} style={tw('rounded bg-button flex-row items-center px-2 py-2 ')}>
                <FontAwesome style={tw('text-white')} name="qrcode" size={15} />
                <Text style={tw('ml-2 text-special')}>
                    增值
                </Text>
            </Pressable>
     
    </LinearGradient>


  )
}

export default Footer