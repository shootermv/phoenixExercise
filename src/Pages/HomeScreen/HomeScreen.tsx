import React from 'react';
import {View} from 'react-native';
import WorkExperiences from './WorkExperiences';
import tw from 'twrnc';
const HomeScreen: React.FC = () => (
  <View style={tw`flex-1 justify-center items-center bg-sky-950`}>
    <WorkExperiences />
  </View>
);

export default HomeScreen;
