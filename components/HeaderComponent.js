import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.appName}>VIMOS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#182933',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 40,
    fontFamily: 'Libre Franklin',
    color: '#FFBB05',
    fontWeight: 'bold',
  },
});

export default HeaderComponent;
