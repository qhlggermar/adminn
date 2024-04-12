import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContentComponent = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>HOME</Text>
      <View style={styles.newContainer}>
        <Text style={styles.newContentText}>Welcome! This app is about chuchu of scan and bar chuchu qr shits of the students yes thats about right bitch.</Text>
      </View>
      <Text style={styles.scannerText}>SCANNER</Text>
      <Text style={styles.subtitleText}>Select your preferred scanner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'flex-start',
    padding: 30,
  },
  contentText: {
    fontSize: 40,
    fontFamily: 'Libre Franklin',
    marginBottom: 0.2,
    textAlign: 'right',
    color: 'white',
  },
  newContainer: {
    marginTop: 20,         
    backgroundColor: '#182933',
    paddingVertical: 20,    
    paddingHorizontal: 10, 
    borderRadius: 30,      
},

  newContentText: {
    fontSize: 20,
    fontFamily: 'Libre Franklin',
    textAlign: 'left',
    color: 'white',
  },
  scannerText: {
    fontSize: 30,
    fontFamily: 'Libre Franklin',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 20,
    fontFamily: 'Libre Franklin',
    color: 'white',
    marginTop: 0.5,
    textAlign: 'center',
  },
});

export default ContentComponent;
