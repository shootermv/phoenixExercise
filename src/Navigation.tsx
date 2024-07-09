import React from 'react';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ContactMeScreen from './Pages/ContactMe/ContactMeScreen';
import HomeScreen from './Pages/HomeScreen';
import ProjectsScreen from './Pages/ProjectsScreen';

type RootStackParamList = {
  Home: undefined;
  Projects: undefined;
  'Contact Me': undefined;
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  route: RouteProp<RootStackParamList>;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const HeaderLeft = ({route}: {route: RouteProp<RootStackParamList>}) => {
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

const TabNavigator = () => (
  <Tab.Navigator
    backBehavior="history"
    screenOptions={({route}) => ({
      headerShown: true,
      headerLeft: () => <HeaderLeft route={route} />,
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
