import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import WorkExperiencesList from './workExperiences.json';
import tw from 'twrnc';

import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store';
import {fetchJobExperiences} from '../../store/worksSlice';

const WorkExperiences: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    jobExperiences: data,
    status,
    error,
  } = useSelector((state: RootState) => state.jobExperiences);

  useEffect(() => {
    console.log('Status:', status);
    if (status === 'idle') {
      dispatch(fetchJobExperiences());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <View style={tw`m-5 p-5 bg-sky-900 rounded-lg shadow w-full mr-6`}>
        <Text style={tw`text-lg font-bold my-3 text-white`}>
          {'... ... ...'}
        </Text>
        <Text style={tw`text-base mb-3 text-white`}> {'... ... ...'}</Text>
        <Text style={tw`text-base mb-3 text-white`}> {'... ... ...'}</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <Text style={tw`mb-5 p-5 bg-red-900 rounded-lg shadow w-90 mr-6`}>
        Error: {error}
      </Text>
    );
  }

  return (
    <FlatList
      data={/*WorkExperiencesList.workExperiences*/ data}
      keyExtractor={item => item.jobTitle}
      horizontal
      renderItem={({item}) => (
        <View style={tw`mb-5 p-5 bg-sky-900 rounded-lg shadow w-90 mr-6`}>
          <Text style={tw`text-lg font-bold my-3 text-white`}>
            {item.company}
          </Text>
          <Text style={tw`text-base mb-3 text-white`}>{item.duration}</Text>
          <Text style={tw`text-base mb-3 text-white`}>{item.description}</Text>
        </View>
      )}
    />
  );
};

export default WorkExperiences;
