import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/screens/HomeScreen'
import FullNews from './components/screens/FullNews'
import Science from './components/screens/Science'
import Technology from './components/screens/Technology'
import Business from './components/screens/Business'
import Sport from './components/screens/Sport'
import World from './components/screens/World'
import Politics from './components/screens/Politics'
import Startup from './components/screens/Startup'
import Entertainment from './components/screens/Entertainment'
import Miscl from './components/screens/Miscl'
import Hakte from './components/screens/Hatke'
import Automobile from './components/screens/Automobile'
import National from './components/screens/National'
import Hatke from './components/screens/Hatke'

const Stack=createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#2c2c6c'} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle:[{backgroundColor:'#2c2c6c'}],
          headerTintColor:'#fff',
          headerTitleStyle:{fontFamily:'Times New Roman',fontWeight:'900',fontSize:25}
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='FullNews' component={FullNews} />
        <Stack.Screen name='Science' component={Science} />
        <Stack.Screen name='Technology' component={Technology} />
        <Stack.Screen name='Business' component={Business} />
        <Stack.Screen name='All' component={Sport} />
        <Stack.Screen name='Politics' component={Politics} />
        <Stack.Screen name='World' component={World} />
        <Stack.Screen name='Startup' component={Startup} />
        <Stack.Screen name='Entertainment' component={Entertainment} />
        <Stack.Screen name='Miscellaneous' component={Miscl} />
        <Stack.Screen name='Hatke' component={Hatke} />
        <Stack.Screen name='Automobile' component={Automobile} />
        <Stack.Screen name='National' component={National} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})