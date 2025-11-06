import React from 'react';
import { StyleSheet, View } from 'react-native';

const BrandComponent = () => {
  return <View style={styles.brandContainer}></View>;
};

const styles = StyleSheet.create({
  brandContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#edf2f4',
    borderRadius: 50,
  },
});

export default BrandComponent;
