import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';
import WorkExperiences from './WorkExperiences';
import Welcome from './Welcome';

const HomeScreen: React.FC = () => (
  <View style={tw`flex-1 justify-center items-center bg-slate-950 px-4 gap-1`}>
    <Welcome />
    <WorkExperiences />
  </View>
);

export default HomeScreen;
