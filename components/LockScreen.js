import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const LockScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundColor}></View>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>VIMOS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColor: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#064167', 
  },
  logo: {
    width: 500,
    height: 180,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontSize: 64,
    color: '#FFBB05',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default LockScreen;
