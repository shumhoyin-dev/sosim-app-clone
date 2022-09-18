import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useTailwind } from 'tailwind-rn';
import Footer from '../component/Footer';
import MainContent from '../component/MainContent';


function MainScreen(props) {
    const tw = useTailwind()
    const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        {/* <Header goBack={navigation.openDrawer()}/> */}
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#273a96', '#0394a8']} style={ tw('py-1 px-5 ')}>
          <View style={ tw('flex-row justify-between items-center py-2')}>
              <View style={tw('flex-row items-center')}>
                  <Image
                  style={tw('w-20 h-8 mr-2')}
                  source={require('../assets/sosim.png')}
                  resizeMode='contain'
                  />   
                  <Image
                  style={tw('w-8 h-8 ml-2')}
                  source={require('../assets/image.png')}
                  resizeMode='contain' 
                  />    
              </View>

              <Pressable onPress={()=>navigation.openDrawer()}>
                  <Icon style={tw('text-white')} name="menu" size={30} />
              </Pressable>
          </View>
          <View>
              <Text style={tw('w-full text-white')}>
                  儲值卡有效期 2022/11/13 00:27
              </Text>
              <Text style={tw('w-full text-xl text-white')}>
                  9999 9999
              </Text>
          </View>
        
        
        </LinearGradient>
        <Pressable onPress={()=>navigation.navigate('Share')}>
                  <Icon style={tw('text-white')} name="menu" size={30} />
        </Pressable>
        <MainContent />
        
      </ScrollView>
      <Footer/>
    </>

  )
}

export default MainScreen