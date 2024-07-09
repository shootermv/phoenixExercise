import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Pressable, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ContactMeScreen from './Pages/ContactMeScreen';
import HomeScreen from './Pages/HomeScreen';
import ProjectsScreen from './Pages/ProjectsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    backBehavior={'history'}
    screenOptions={({route}) => ({
      headerShown: true,
      headerLeft: () => {
        const navigation = useNavigation();
        return (
          <Pressable
            onPress={() => route.name !== 'Home' && navigation.goBack()}
            accessible
            accessibilityRole="button"
            accessibilityLabel="Back">
            <Icon
              size={30}
              name={
                Platform.OS === 'android'
                  ? 'arrow-back-sharp'
                  : 'arrow-back-circle-sharp'
              }
            />
          </Pressable>
        );
      },
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Projects') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Contact Me') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Projects" component={ProjectsScreen} />
    <Tab.Screen name="Contact Me" component={ContactMeScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
