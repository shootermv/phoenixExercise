import React from 'react';
import {View, Text, Image} from 'react-native';
import icon from './me.jpg';

import tw from 'twrnc';
const Welcome: React.FC = () => {
  return (
    <View style={tw` items-center justify-center bg-slate-950 p-4 mb-10 mt-10`}>
      <Image source={icon} style={tw`w-24 h-24 rounded-full mb-4`} />
      <Text style={tw`text-xl text-white font-bold mb-2`}>
        Hi! My name is Moshe
      </Text>
      <Text style={tw`text-white`}>Full Stack Developer</Text>
      <Text style={tw`text-white`}>Here is my work experiences:</Text>
    </View>
  );
};

export default Welcome;
