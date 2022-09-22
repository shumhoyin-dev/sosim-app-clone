import{useState} from 'react'
import {View, ScrollView , StyleSheet, Text, Pressable, Image} from 'react-native'
import {useTailwind} from 'tailwind-rn'
// import {Image} from '@rneui/themed'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

function Roaming() {
    const tw = useTailwind();
    return (
        <View style={{flex:1, justifyContent:'center',padding:16}}>
            <View style={{ 
                display: "flex",
                flexDirection: "vertical",
                justifyContent: "center",
                alignItems: "center",}}
                >
                    <Image
                        style={{          
                        resizeMode: "contain",
                        height: 200,
                        width: 200}}
                        source={require('../assets/3HKlogo.png')}
                    />    
                    <Text style={tw('w-full text-center pt-3 pb-4')}>
                        沒有有效組合
                    </Text>
                
           </View>

            <Pressable style={tw('text-center text-white py-2 bg-red-500 rounded-full my-2 ')}>
                <View style={tw('flex-row justify-center items-center')}>
                    <MaterialIcons style={tw('text-white mr-3')} name="shopping-basket" size={20} />
                    <Text style={tw('text-white')}>
                        購買組合
                    </Text>
                </View>
            </Pressable>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#273a96', '#0394a8']} style={ tw('w-full rounded-xl h-20 my-3')}>

            </LinearGradient>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#273a96', '#0394a8']} style={ tw('w-full rounded-xl h-20 my-3')}>

            </LinearGradient>
        </View>
    )
}

export default Roaming