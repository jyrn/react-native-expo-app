import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <View style={[styles.header, darkMode && styles.darkHeader]}>
      <Text style={[styles.title, darkMode && styles.darkText]}>My Portfolio</Text>
      <Switch
        trackColor={{ false: "#fff", true: "#2980B9" }}
        thumbColor={darkMode ? "#f4f3f4" : "#2980B9"}
        ios_backgroundColor="#fff"
        onValueChange={() => setDarkMode(!darkMode)}
        value={darkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    position: 'absolute',
    paddingBottom: 15,
    paddingTop: 70,
    zIndex: 100,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  darkHeader: {
    backgroundColor: '#292E49',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6DD5FA',
  },
  darkText: {
    color: '#fff',
  },
});

export default Header;
