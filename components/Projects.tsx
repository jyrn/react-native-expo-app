import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  { id: '1', name: 'Portfolio Website', 
    img: require('../assets/prof.png'),
    description: 'A personal portfolio website built using React, showcasing projects and skills.'
},
  { id: '2', name: 'Inventory Management System', 
    img: require('../assets/inven.png'),
    description: 'An inventory system that helps businesses track stock, sales, and orders efficiently.',
 },
    
  { id: '3', name: 'Restaurant Management System', 
    img: require('../assets/res.png'),
    description: 'A system for managing restaurant reservations, orders, and kitchen workflow.', },
];

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, darkMode && styles.darkText]}>Projects</Text>
        <View style={[styles.underline, darkMode && styles.darkUnderline]} />
      </View>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        renderItem={({ item }) => (
          <View style={[styles.card, darkMode && styles.darkCard]}>
            <Image source={item.img} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={[styles.cardTitle, darkMode && styles.darkText]}>{item.name}</Text>
              <Text style={[styles.cardText, darkMode && styles.darkSubText]}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
    marginBottom: 40,
    marginTop:90,
    paddingBottom:20

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
  underline: {
    width: 60,
    height: 5,
    backgroundColor: '#2a9d8f',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20
  },
  darkUnderline: {
    backgroundColor: '#bacdb0',
  },
  listContainer: {
    paddingHorizontal: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  card: {
    width: 300, 
    backgroundColor: '#cce3de',
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20, 
   
  },
  darkCard: {
    backgroundColor: '#343a40',
  },
  cardImage: {
    width: '100%',
    height: 220, 
    resizeMode: 'cover',
    borderRadius: 20
  },
  cardBody: {
    padding: 20,
    elevation: 3,
    
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#023e8a'
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
  darkSubText: {
    color: '#fff',
  },
});

export default Projects;