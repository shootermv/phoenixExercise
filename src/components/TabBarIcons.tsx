import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {RouteProp} from '@react-navigation/native';
import RootStackParamList from '../Models/RootStackParamList';
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  route: RouteProp<RootStackParamList>;
};
const TabBarIcon = ({focused, color, size, route}: TabBarIconProps) => {
  let iconName: string = '';

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Projects') {
    iconName = focused ? 'settings' : 'settings-outline';
  } else if (route.name === 'Contact Me') {
    iconName = focused ? 'person' : 'person-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
