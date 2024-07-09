import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import frontendProjects from './frontendProjects.json';
import tw from 'twrnc';

const FrontendProjects = () => {
  return (
    <FlatList
      data={frontendProjects.frontendProjects}
      keyExtractor={item => item.projectName}
      horizontal
      renderItem={({item}) => (
        <View style={tw`mb-5 p-5 bg-white rounded-lg shadow`}>
          <Image
            source={{uri: item.screenshot}}
            style={tw`w-full h-50 rounded-lg`}
          />
          <Text style={tw`text-lg font-bold my-3`}>{item.projectName}</Text>
          <Text style={tw`text-base mb-3`}>{item.description}</Text>
          <Text style={tw`text-sm text-gray-600 mb-3`}>
            Technologies: {item.technologies.join(', ')}
          </Text>
          <Text style={tw`text-sm text-gray-600 mb-3`}>
            Duration: {item.duration}
          </Text>

          <TouchableOpacity onPress={() => Linking.openURL(item.projectLink)}>
            <Text style={tw`text-sm text-blue-600`}>Project Link:</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default FrontendProjects;
