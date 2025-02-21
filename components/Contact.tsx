import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <View style={styles.contactContainer}>
      <View style={styles.titleContainer}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>Contact Me</Text>
        <View style={[styles.underline, darkMode && styles.darkUnderline]} />
      </View>

      <View style={[styles.contactItem, darkMode ? styles.darkCard : styles.lightCard]}>
        <Image source={require('../assets/gmail.png')} style={styles.contactImage} />
        <View style={styles.contactTextContainer}>
          <Text style={[styles.contactText, darkMode ? styles.darkText : styles.lightText]}>Gmail</Text>
          <Text style={[styles.username, darkMode ? styles.darkSubText : styles.lightSubText]}>
            janyrin@gmail.com
          </Text>
        </View>
      </View>

      <View style={[styles.contactItem, darkMode ? styles.darkCard : styles.lightCard]}>
        <Image source={require('../assets/facebook.png')} style={styles.contactImage} />
        <View style={styles.contactTextContainer}>
          <Text style={[styles.contactText, darkMode ? styles.darkText : styles.lightText]}>Facebook</Text>
          <Text 
            style={[styles.username, darkMode ? styles.darkSubText : styles.lightSubText]} 
            numberOfLines={1} 
            ellipsizeMode="tail"
          >
            facebook.com/janyrin.anonuevo
          </Text>
        </View>
      </View>

      <View style={[styles.contactItem, darkMode ? styles.darkCard : styles.lightCard]}>
        <Image source={require('../assets/instagram.png')} style={styles.contactImage} />
        <View style={styles.contactTextContainer}>
          <Text style={[styles.contactText, darkMode ? styles.darkText : styles.lightText]}>Instagram</Text>
          <Text style={[styles.username, darkMode ? styles.darkSubText : styles.lightSubText]}>
            @janyrin
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    alignItems: 'center',
    marginTop: 140,
    marginBottom: 80,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#023e8a',
  },
  underline: {
    width: 80,
    height: 5,
    backgroundColor: '#2a9d8f',
    borderRadius: 5,
    marginTop: 5,
  },
  darkUnderline: {
    backgroundColor: '#bacdb0',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '93%',
    padding: 15,
    borderRadius: 20,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  lightCard: {
    backgroundColor: '#cce3de',
  },
  darkCard: {
    backgroundColor: '#343a40',
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    marginTop: 3,
    flexShrink: 1,
  },
  lightText: {
    color: '#023e8a',
  },
  darkText: {
    color: '#90e0ef',
  },
  lightSubText: {
    color: '#777',
  },
  darkSubText: {
    color: '#fff',
  },
});

export default Contact;
