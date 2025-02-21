import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileProps {
  darkMode: boolean;
}

const Profile: React.FC<ProfileProps> = ({ darkMode }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/me.jpeg')} style={styles.image} />
      <Text 
        style={[styles.name, darkMode && styles.darkName]} 
        numberOfLines={1} 
        adjustsFontSizeToFit
      >
        Hi, I am Jan!
      </Text>
      <Text 
        style={[styles.bio, darkMode && styles.darkText]}
      >
        I am a 3rd Year Computer Science student passionate about coding and innovation.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 170,
    marginBottom: 170,
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: '#2980B9',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    width: '150%',
    marginBottom: 20,
    color: '#023e8a',
  },
  darkName: {
    color: '#90e0ef',
  },
  bio: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: '#2980B9',
  },
  darkText: {
    color: '#fff',
  },
});

export default Profile;
