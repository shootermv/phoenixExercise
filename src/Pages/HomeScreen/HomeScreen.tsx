import React from 'react';
import {View, StyleSheet} from 'react-native';
import WorkExperiences from './WorkExperiences';

const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <WorkExperiences />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
