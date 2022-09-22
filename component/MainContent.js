import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  Dimensions,View,Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import DataRemain from './DataRemain';
import Existing from './Existing';
import Roaming from './Roaming';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from '@rneui/themed';

const Tab = createMaterialTopTabNavigator();
const width = Dimensions.get('window').width * 0.8;

function MainContent() {
    const tw = useTailwind();
  return (

    <View style={tw('py-2 px-2')}>
        <View style={tw('w-full px-2 py-1 items-center justify-center')}>
          <Carousel
              loop
              data={[...new Array(6).keys()]}
              autoPlay
              width={width}
              height={100}
              renderItem={({ index }) => (
                <View>
                  <Image
                    containerStyle={tw('w-full h-64 rounded')}
                    source={{uri:'https://web.three.com.hk/prepaid/sosim/images/landing-mgm-mob-en.webp'}} 
                  /> 
                </View>                 
              )} 
            />
        </View>
         
      <Tab.Navigator
       screenOptions={{
        tabBarStyle: {backgroundColor:'transparent'},
        tabBarItemStyle:{padding:0,margin:0},
        tabBarLabelStyle:{padding:0,margin:0},
      }}
      >
        <Tab.Screen name="Data" component={DataRemain}  options={{
                tabBarLabel: '本地服務',
              }}/> 
        <Tab.Screen name="Travel" component={Roaming}  options={{
                tabBarLabel: '外遊服務',
              }}/>
        <Tab.Screen name="Existing" component={Existing}  options={{
                tabBarLabel: '現時有效組合',
              }}/>
      </Tab.Navigator>
    </View>


  )
}

export default MainContent