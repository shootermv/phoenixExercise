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
import Badge from '../../components/Badge';

const FrontendProjects = () => {
  return (
    <FlatList
      data={frontendProjects.frontendProjects}
      keyExtractor={item => item.projectName}
      horizontal
      renderItem={({item}) => (
        <View style={tw`mb-5 p-5 bg-sky-900 rounded-lg shadow w-115 mr-6`}>
          <Image
            source={{uri: item.screenshot}}
            style={tw`w-full h-50 rounded-lg`}
          />
          <Text style={tw`text-lg text-white font-bold my-3`}>
            {item.projectName}
          </Text>
          <Text style={tw`text-base text-white mb-3`}>{item.description}</Text>
          <Text style={tw`text-sm text-white mb-3`}>Technologies:</Text>
          <Text style={tw`text-sm text-white mb-3`}>
            {item.technologies.map(tech => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </Text>
          <Text style={tw`text-sm text-white mb-3`}>
            Duration: {item.duration}
          </Text>

          <TouchableOpacity
            style={tw`bg-slate-900 p-2 rounded-lg w-35`}
            onPress={() => Linking.openURL(item.projectLink)}>
            <Text style={tw`text-sm text-white`}>Project Link</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default FrontendProjects;
