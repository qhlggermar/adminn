import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NavigationBarComponent = () => {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity>
        <Image source={require('../assets/document.png')} style={styles.navButton} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/scanner.png')} style={styles.navButton} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/pen.png')} style={styles.navButton} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },
  navButton: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default NavigationBarComponent;
