import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTailwind } from 'tailwind-rn';


function DataCard() {
  const tw = useTailwind();
  const navigaiton = useNavigation();
  return (
    <View style={tw('my-2 px-3 py-3 rounded bg-white flex-row items-center')}>
            <View style={tw('grow')}>
                <View style={tw('flex-row grow items-center justify-between mb-1')}>
                    <Text >
                        本地數據
                    </Text>
                    <Text>
                        59.64/GB / 60GB
                    </Text>
                </View>
                <View style={tw('w-full h-2 bg-red-500 rounded-full')}/>
            </View>
            <Pressable style={tw('grow-0 pl-2')} onPress={()=>navigaiton.navigate('Quota')}>
                <View >
                    <Ionicons  style={tw('')} name="list-circle"  size={35} />
                </View>
            </Pressable>
    </View>
  )
}

export default DataCard