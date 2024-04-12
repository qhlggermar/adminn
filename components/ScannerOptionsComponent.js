import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ScannerOptionsComponent = () => {
  return (
    <View style={styles.scannerOptionsContainer}>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <View style={styles.optionButtonInner1}>
            <Image source={require('../assets/barcode_logo.png')} style={styles.optionImage} />
          </View>
          <Text style={styles.optionButtonText}>Bar Code Student ID</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <View style={styles.optionButtonInner2}>
            <Image source={require('../assets/qr_code_logo.png')} style={styles.optionImage} />
          </View>
          <Text style={styles.optionButtonText}>QR Code Violation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scannerOptionsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionContainer: {
    alignItems: 'center',
  },
  optionButton: {
    alignItems: 'center',
  },
  optionButtonInner1: {
    backgroundColor: '#F69000',
    borderRadius: 30,
    padding: 20,
  },
  optionButtonInner2: {
    backgroundColor: '#535C91',
    borderRadius: 30,
    padding: 20,
  }, 
  optionImage: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
  },
  optionButtonText: {
    fontSize: 18,
    fontFamily: 'Libre Franklin',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    padding: 5,
  },
});

export default ScannerOptionsComponent;
