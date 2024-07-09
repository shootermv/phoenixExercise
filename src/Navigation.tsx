import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ContactMeScreen from './Pages/ContactMe/ContactMeScreen';
import HomeScreen from './Pages/HomeScreen';
import ProjectsScreen from './Pages/ProjectsScreen';
import BackButton from './components/BackButton';
import TabBarIcon from './components/TabBarIcons';

type RootStackParamList = {
  Home: undefined;
  Projects: undefined;
  'Contact Me': undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => (
  <Tab.Navigator
    backBehavior="history"
    screenOptions={({route}) => ({
      headerShown: true,
      BackButton: () => <BackButton route={route} />,
      tabBarIcon: ({focused, color, size}) => (
        <TabBarIcon {...{focused, color, size, route}} />
      ),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Projects" component={ProjectsScreen} />
    <Tab.Screen name="Contact Me" component={ContactMeScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
