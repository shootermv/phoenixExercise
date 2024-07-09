import React from 'react';
import {StyleSheet, View} from 'react-native';
import FrontendProjects from './FrontEndProjects';
const ProjectsScreen: React.FC = () => (
  <View style={styles.container}>
    <FrontendProjects />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ProjectsScreen;
