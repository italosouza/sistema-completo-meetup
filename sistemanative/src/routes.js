import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Dashboard from './pages/Dashboard'
import Subscriptions from './pages/Subscriptions'
import Profile from './pages/Profile'

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator(
          {
            SignIn,
            SignUp,
          },
          {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#2B1A2F',
              },
              headerTintColor: '#FFF',
            },
          }
        ),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Subscriptions,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#2B1A2F',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  )
