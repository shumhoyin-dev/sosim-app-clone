import React from 'react'
import { Text,SafeAreaView , Pressable,Image,View , ScrollView} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


import { LinearGradient } from 'expo-linear-gradient';

function CustomDrawerContent(props) {
    const tw = useTailwind();
    const navigation = useNavigation();
  return (
    <LinearGradient style={{ flex: 1}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#273a96', '#0394a8']}>
            <SafeAreaView>
                <ScrollView style={tw('py-4 px-5')}>
                <Pressable onPress={()=>{props.navigation.closeDrawer()}}>
                    <Entypo style={tw('text-white')} name="cross" size={30} />
                </Pressable>

                <Pressable onPress={()=>{
                    navigation.navigate('Home');
                    props.navigation.closeDrawer();
                    }} 
                    style={tw('flex-row items-center py-3 ')} 
                >
                    <MaterialIcons style={tw('text-white')}  name="home"  size={25} />
                    <Text style={tw('text-white ml-2')}>主頁</Text>
                </Pressable>

                <Pressable onPress={()=>{
                    navigation.navigate('Purchase');
                    props.navigation.closeDrawer();
                    }} 
                    style={tw('flex-row items-center py-3 ')} >
                    <MaterialIcons style={tw('text-white')}  name="shopping-basket"  size={25} />
                    <Text style={tw('text-white ml-2')}>購買組合</Text>
                </Pressable>

                <Pressable onPress={()=>{
                    navigation.navigate('Gift');
                    props.navigation.closeDrawer();
                    }} 
                    style={tw('flex-row items-center py-3 ')} >
                    <MaterialIcons style={tw('text-white')} name="wallet-giftcard"  size={25} />
                    <Text style={tw('text-white ml-2')}>獎賞</Text>
                </Pressable>
                
                <Pressable onPress={()=>{
                    navigation.navigate('Message');
                    props.navigation.closeDrawer();
                    }} 
                    style={tw('flex-row items-center py-3 ')} >
                    <Entypo style={tw('text-white')}  name="new"  size={25} />
                    <Text style={tw('text-white ml-2')}>最新優惠</Text>
                </Pressable>

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <Feather style={tw('text-white')}  name="credit-card"  size={25} />
                    <Text style={tw('text-white ml-2')}>交易記錄</Text>
                </Pressable>

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <MaterialIcons style={tw('text-white')} name="sim-card" size={25} />
                    <Text style={tw('text-white ml-2')}>增值其他SoSIM儲值卡</Text>
                </Pressable>

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <FontAwesome5 style={tw('text-white')} name="user-friends" size={20} />
                    <Text style={tw('text-white ml-2')}>推薦朋友</Text>
                </Pressable>

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <MaterialIcons style={tw('text-white')} name="message" size={25} />
                    <Text style={tw('text-white ml-2')}>信箱</Text>
                </Pressable>

                <Divider style={tw('py-2')}width={1} color={'white'} />

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <Feather style={tw('text-white')}  name="credit-card"  size={25} />
                    <Text style={tw('text-white ml-2')}>易賞錢推廣活動</Text>
                </Pressable>

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <MaterialIcons style={tw('text-white')}  name="question-answer"  size={25} />
                    <Text style={tw('text-white ml-2')}>支援</Text>
                </Pressable>

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <Ionicons style={tw('text-white')}  name="settings-outline"  size={25} />
                    <Text style={tw('text-white ml-2')}>設定 / 實名登記 / 攜號轉台 / eSIM</Text>
                </Pressable>

                <Pressable style={tw('flex-row items-center py-3 ')} >
                    <Ionicons style={tw('text-white')}  name="exit-outline"  size={25} />
                    <Text style={tw('text-white ml-2')}>切換使用者</Text>
                </Pressable>

            </ScrollView>
            </SafeAreaView>

    </LinearGradient>
  )
}

export default React.memo(CustomDrawerContent)