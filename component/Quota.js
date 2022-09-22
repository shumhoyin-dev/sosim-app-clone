import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { useTailwind } from 'tailwind-rn'
import CircularProgress from 'react-native-circular-progress-indicator'

function Quota() {
  const tw = useTailwind();
  const navigation = useNavigation();
  return (
    <View style={{flex:1,padding:32}}>
            <View style={tw('flex-row justify-between items-center py-2')}>
              <View style={tw('flex-row items-center')}>
                <AntDesign style={tw('mr-3')} name="exclamationcircle" size={15} />
                <Text style={tw('text-lg font-semibold')}>本地數據</Text>
              </View>
              <Pressable onPress={()=> navigation.goBack()}>
                <Entypo style={tw('')} name="cross" size={20} />
              </Pressable>
            </View>

            <View style={tw('flex-row items-center justify-center py-6')}>

              <CircularProgress
                inActiveStrokeWidth={40}
                activeStrokeWidth={40}
                radius={110}
                value={85}
                inActiveStrokeColor={'#2ecc71'}
                inActiveStrokeOpacity={0.2}
                progressValueColor={'#000'}
                valueSuffix={'GB'}
                subtitle='合共有60GB'
                subtitleFontSize={13}
                progressValueStyle={{
                  fontSize:30,
                  fontWeight:'bold',
                  color:'black'
                }}
              />
            
            </View>

   
            <View style={tw('my-2 px-3 py-3 bg-white rounded flex-row items-center')}>
              <View style={tw('grow')}>
                <View style={tw('')}>
                    <Text >
                        30日/本地數據/FUP 60GB
                    </Text>
                </View>
                <View style={tw('flex-row grow items-center justify-between mb-1')}>
                    <Text >
                        2022/10/16 00:14到期
                    </Text>
                    <Text style={tw('text-sm')}>
                        60GB / 60GB
                    </Text>
                 
                </View>
                <View style={tw('w-full h-2 bg-red-500 rounded-full')}/>
              </View>
            </View>


            <Pressable style={tw('rounded grow-0 pl-2 flex-row items-center justify-start py-3')} onPress={()=>navigation.navigate('Purchase')}>
              <Feather  style={tw('mr-2 text-blue-500 ')} name="plus"  size={30} />
              <Text>
                新增本地數據
              </Text>
            </Pressable>



    </View>
  )
}

export default Quota