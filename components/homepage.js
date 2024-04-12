import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './HeaderComponent';
import Content from './ContentComponent';
import ScannerOptions from './ScannerOptionsComponent';
import NavigationBar from './NavigationBarComponent';


const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <ScannerOptions />
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBB05',
  },
});

export default App;
