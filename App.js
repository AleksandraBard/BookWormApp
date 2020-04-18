import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import SignUpScreen from './screens/SignUpScreen'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from './screens/SettingsScreen'
import CustomDrawerComponent from "./screens/DrawerNavigator/CustomDrawerComponent";


const App = () => <AppContainer />

const LoginStackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen, 
    navigationOptions: {
      header: null,
      headerBackTitle: null
    }
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {}
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen:{
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: () => <Ionicons name="ios-home" size={24} />
    }
  },
  SettingsScreen:{
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      drawerIcon: () => <Ionicons name="ios-settings" size={24} />
    }
  }
},
{
  contentComponent: CustomDrawerComponent
})

const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  AppDrawerNavigator
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export default App