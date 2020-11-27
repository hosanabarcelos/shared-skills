import * as React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import {CustomHeader, CustomDrawerContent} from './src/pages/components/'
import {Home} from './src/pages/Home'
import {Profile} from './src/pages/Profile'
import {Register} from './src/pages/Register'
import {Login} from './src/pages/Login'
import {Buscar} from './src/pages/Buscar'
import {Messages} from './src/pages/Messages'
import {Splash} from './src/pages/Splash'

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  handlerShown: false
})


const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name = 'Home' component = {Home} options = {{navOptionHandler, headerShown: false}} />
    </StackHome.Navigator>  
  )
}

const StackProfile = createStackNavigator();

function ProfileStack() {
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen name = 'Profile' component = {Profile} options = {{navOptionHandler, headerShown: false}} />
    </StackProfile.Navigator>  
  )
}

const StackMessages = createStackNavigator();

function MessagesStack() {
  return (
    <StackMessages.Navigator>
      <StackMessages.Screen name = 'Mensagens' component = {Messages} options = {{navOptionHandler, headerShown: false}} />
    </StackMessages.Navigator>  
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Início') {
          iconName = focused ? 'home'  : 'home';
        } 
        else if (route.name === 'Perfil') {
          iconName = focused ? 'user' : 'user';
        }
        else if (route.name === 'Mensagens') {
          iconName = focused ? 'envelope-open' : 'envelope';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#590995',
      inactiveTintColor: 'gray',
    }} >

        <Tab.Screen name="Início" component={HomeStack}/>
        <Tab.Screen name="Perfil" component={ProfileStack} />
        <Tab.Screen name="Mensagens" component={MessagesStack} />

      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent = {() => <CustomDrawerContent navigation = {navigation}/>}>
      <Drawer.Screen name="Tela inicial" component={TabNavigator} />
      <Drawer.Screen name="Buscar" component={Buscar} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();

export default function App() { 
  return ( 
    <NavigationContainer> 
      <StatusBar 
      barStyle="light-content"
      hidden = {false}
      backgroundColor = '#590995'
      />
      <StackApp.Navigator initialRouteName = 'Splash'> 
      <StackApp.Screen name = 'Splash' component = {Splash} options = {{navOptionHandler, headerShown: false}}/>
        <StackApp.Screen name = 'Shared Skills' component = {DrawerNavigator} options = {{navOptionHandler, headerShown: false}} />
        <StackApp.Screen name = 'Acessar' component = {Login} options = {{navOptionHandler, headerShown: false}}/>
        <StackApp.Screen name = 'Criar conta' component = {Register} options = {{navOptionHandler, headerShown: false}}/>
      </StackApp.Navigator>  
      
    </NavigationContainer>
  );
}

//headerShown: false = tira o cabeçalho do react navigation