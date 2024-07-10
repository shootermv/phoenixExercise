import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
      headerStyle: {
        backgroundColor: '#172554',
      },
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#172554',
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#60a5fa',
      headerShown: true,
      headerLeft: () => <BackButton route={route} />,
      tabBarIcon: ({focused, color, size}) => (
        <TabBarIcon {...{focused, color, size, route}} />
      ),
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Projects" component={ProjectsScreen} />
    <Tab.Screen name="Contact Me" component={ContactMeScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
