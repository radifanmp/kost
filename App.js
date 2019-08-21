import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import CheckUser from './src/navigations/CheckUser';
import PublicStack from './src/navigations/PublicStack';
import PrivateStack from './src/navigations/PrivateStack';

export default createAppContainer(createSwitchNavigator(
  {
    CheckUser: CheckUser,
    PublicStack: PublicStack,
    PrivateStack: PrivateStack,
  },
  {
    initialRouteName: 'CheckUser',
  }
));


// import React from 'react';
// import {View} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome5';

// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


// import Home from './src/screens/Home/Home';
// import Ads from './src/screens/Kost/Ads';
// import List from './src/screens/Kost/List';
// import Detail from './src/screens/Kost/Detail';
// import Filter from './src/screens/Kost/Filter';

// import Booking from './src/screens/Booking/Booking';
// import BookingList from './src/screens/Booking/List';

// import Account from './src/screens/Authorization/Account';
// import Profile from './src/screens/Authorization/Profile';
// import Register from './src/screens/Authorization/Register';
// import Login from './src/screens/Authorization/Login';

// const StackHome = createStackNavigator({
//   Home : {
//     screen : Home
//   },
//   Iklan : {
//     screen : Ads
//   }
// },
// {
//   headerMode: 'none'
// })

// const StackList = createStackNavigator({
//   List : {
//     screen : List
//   },
//   Detail : {
//     screen : Detail
//   },
//   Filter:{
//     screen: Filter
//   }
// },
// {
//   headerMode : 'none'
// })

// const StackAccount = createStackNavigator({
//   Account : {
//     screen : Account
//   },
//   Profile : {
//     screen : Profile
//   },
//   Register : {
//     screen : Register
//   },
//   Login : {
//     screen : Login
//   }
// },
// {
//   headerMode: 'none'
// })

// const StackBooking = createStackNavigator({
//   BookList : {
//     screen : BookingList
//   },
//   Book : {
//     screen : Booking
//   },
// },
// {
//   headerMode: 'none'
// })

// const BottomNavigator = createMaterialBottomTabNavigator({
//   Home : {
//     screen : StackHome,
//     navigationOptions : {
//       tabBarIcon : ({ tintColor }) => (
//         <View>
//           <Icon name='home' size={20} color={tintColor} />
//         </View>
//       )
//     }
//   },

//   List : {
//     screen : StackList,
//     navigationOptions : {
//       tabBarVisible: false,
//       tabBarIcon : ({ tintColor }) => (
//         <View>
//           <Icon name='list-alt' size={20} color={tintColor} />
//         </View>
//       )
//     }
//   },
//   BookList: {
//     screen: StackBooking,
//     navigationOptions:{  
//       tabBarVisible: false,
//       tabBarLabel:'Book List',  
//       tabBarIcon: ({ tintColor }) => (  
//           <View>  
//               <Icon style={[{color: tintColor}]} size={20} name={'clipboard-list'}/>  
//           </View>),  
//     }  
//   },
//   Account : {
//     screen : StackAccount,
//     navigationOptions : {
//       tabBarVisible: false,
//       tabBarLabel : 'Account',
//       tabBarIcon : ({ tintColor }) => (
//         <View>
//           <Icon name='user-tie' size={20} color={tintColor} />
//         </View>
//       )
//     }
//   }
// },
// {
//   initialRouteName: 'Home',
//   barStyle: {
//     backgroundColor: '#cf0e04'
//   }
// })

// export default createAppContainer(BottomNavigator);
