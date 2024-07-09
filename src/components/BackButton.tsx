import React from 'react';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {Platform, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  Home: undefined;
  Projects: undefined;
  'Contact Me': undefined;
};

const BackButton = ({route}: {route: RouteProp<RootStackParamList>}) => {
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

export default BackButton;
