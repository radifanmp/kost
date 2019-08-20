
import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import IklanScreen from './src/screens/AdScreen';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import BookScreen from './src/screens/BookScreen';
import BookListScreen from './src/screens/BookListScreen';

import Account from './src/screens/Authorization/Account';
import Register from './src/screens/Authorization/Register';
import Login from './src/screens/Authorization/Login';

const StackHome = createStackNavigator({
  Home : {
    screen : HomeScreen
  },
  Iklan : {
    screen : IklanScreen
  }
},
{
  headerMode: 'none'
})

const StackList = createStackNavigator({
  List : {
    screen : ListScreen
  },
  Detail : {
    screen : DetailScreen
  }
},
{
  headerMode : 'none'
})

const StackAccount = createStackNavigator({
  Account : {
    screen : Account
  },
  Register : {
    screen : Register
  },
  Login : {
    screen : Login
  }
},
{
  headerMode: 'none'
})

const StackBook = createStackNavigator({
  BookList : {
    screen : BookListScreen
  },
  Book : {
    screen : BookScreen
  },
},
{
  initialRouteName : 'BookList',
  headerMode: 'none'
})

const BottomNavigator = createMaterialBottomTabNavigator({
  Home : {
    screen : StackHome,
    navigationOptions : {
      tabBarIcon : ({ tintColor }) => (
        <View>
          <Icon name='home' size={20} color={tintColor} />
        </View>
      )
    }
  },

  List : {
    screen : StackList,
    navigationOptions : {
      tabBarVisible: false,
      tabBarIcon : ({ tintColor }) => (
        <View>
          <Icon name='list-alt' size={20} color={tintColor} />
        </View>
      )
    }
  },
  BookList: {
    screen: StackBook,
    navigationOptions:{  
      tabBarVisible: false,
      tabBarLabel:'Book List',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={20} name={'clipboard-list'}/>  
          </View>),  
    }  
  },
  Account : {
    screen : StackAccount,
    navigationOptions : {
      tabBarVisible: false,
      tabBarLabel : 'Account',
      tabBarIcon : ({ tintColor }) => (
        <View>
          <Icon name='user-tie' size={20} color={tintColor} />
        </View>
      )
    }
  }
},
{
  initialRouteName: 'Home',
  barStyle: {
    backgroundColor: '#cf0e04'
  }
})

export default createAppContainer(BottomNavigator);
