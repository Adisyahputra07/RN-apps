import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, LandingPages, Profile} from './pages';
import {Register, Login} from './components';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from './counterSlice';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFBD35',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return (
              <Icon
                name="home"
                size={25}
                color={focused ? '#FFBD35' : '#9A9483'}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Icon
                name="user"
                color={focused ? '#FFBD35' : '#9A9483'}
                size={25}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function RootStack() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.counter.token);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch(setToken(token));
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token !== null ? (
        <Stack.Screen name="TabHome" component={TabHome} />
      ) : (
        <>
          <Stack.Screen name="LandingPages" component={LandingPages} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
}
