import React from 'react';

import {View, Text} from 'react-native';
import tw from 'twrnc';
const Badge: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <View style={tw`bg-blue-500 rounded-full px-3 py-1 m-1`}>
      <Text style={tw`text-white text-sm`}>{children}</Text>
    </View>
  );
};

export default Badge;
