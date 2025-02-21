import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground 
        source={darkMode ? require('./assets/Royal Blue.jpg') : require('./assets/coolsky.jpg')} 
        style={styles.background}
        resizeMode="cover"
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollView contentContainerStyle={styles.content}>
          <Profile darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    padding: 20,
    paddingTop: 100,
  },
});

export default App;
