import React from 'react';
import {View, Text, FlatList} from 'react-native';
import WorkExperiencesList from './workExperiences.json';
import tw from 'twrnc';

const WorkExperiences: React.FC = () => {
  return (
    <FlatList
      data={WorkExperiencesList.workExperiences}
      keyExtractor={item => item.jobTitle}
      horizontal
      renderItem={({item}) => (
        <View style={tw`mb-5 p-5 bg-white rounded-lg shadow`}>
          <Text style={tw`text-lg font-bold my-3`}>{item.company}</Text>
          <Text style={tw`text-base mb-3`}>{item.duration}</Text>
          <Text style={tw`text-base mb-3`}>{item.description}</Text>
        </View>
      )}
    />
  );
};

export default WorkExperiences;
