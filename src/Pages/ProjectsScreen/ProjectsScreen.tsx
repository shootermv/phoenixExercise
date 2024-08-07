import React from 'react';
import {View} from 'react-native';
import FrontendProjects from './FrontEndProjects';
import tw from 'twrnc';
const ProjectsScreen: React.FC = () => (
  <View style={tw`flex-1 justify-center items-center bg-slate-950 px-4`}>
    <FrontendProjects />
  </View>
);

export default ProjectsScreen;
