import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills = [
    { id: '1', name: 'React Native', img: require('../assets/reacc.png') },
    { id: '2', name: 'Expo', img: require('../assets/expo.png') },
    { id: '3', name: 'Node.js', img: require('../assets/node.png') },
    { id: '4', name: 'HTML', img: require('../assets/html.png') },
    { id: '5', name: 'CSS', img: require('../assets/css.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, darkMode && styles.darkText]}>List of Skills</Text>
        <View style={[styles.underline, darkMode && styles.darkUnderline]} />
      </View>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.box, darkMode && styles.darkBox]}>
            <Image source={item.img} style={styles.image} />
            <Text style={[styles.name, darkMode && styles.darkName]}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
    marginTop: 20,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#023e8a',
  },
  darkText: {
    color: '#90e0ef',
  },
  darkName:{
    color:'#fff'
  },
  underline: {
    width: 80,
    height: 5,
    backgroundColor: '#2a9d8f',
    borderRadius: 5,
    marginTop: 10,
  },
  darkUnderline: {
    backgroundColor: '#bacdb0',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cce3de',
    padding: 15,
    borderRadius: 100,
    marginHorizontal: 10,
    marginTop: 30,
    width: 200,
    height: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  darkBox: {
    backgroundColor: '#5c677d',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#2a9d8f'
  },
});

export default Skills;
