import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const ProjectsScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Projects Screen</Text>
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
