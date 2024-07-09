import React from 'react';
import {View} from 'react-native';
import FrontendProjects from './FrontEndProjects';
import tw from 'twrnc';
const ProjectsScreen: React.FC = () => (
  <View style={tw`flex-1 justify-center items-center bg-black`}>
    <FrontendProjects />
  </View>
);

export default ProjectsScreen;
