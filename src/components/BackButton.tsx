import React from 'react';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {Platform, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RootStackParamList from '../Models/RootStackParamList';

const BackButton = ({route}: {route: RouteProp<RootStackParamList>}) => {
  const navigation = useNavigation();
  if (route.name === 'Home') return <></>;
  return (
    <Pressable
      onPress={() => route.name !== 'Home' && navigation.goBack()}
      accessible
      accessibilityRole="button"
      accessibilityLabel="Back">
      <Icon
        style={{color: '#fff'}}
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

export default BackButton;
