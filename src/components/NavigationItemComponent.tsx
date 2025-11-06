import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const NavigationItemComponent = ({title = "", icon = ""}) => {
  return (
    <View style={styles.navigationItemContainer}>
      <View style={styles.navigationItemBody}>
        <Ionicons name={icon} size={32} color={'#ef233c'} />
      </View>
      <View style={styles.navigationItemFooter}>
        <Text style={{ color: '#d90429', fontWeight: 'bold' }}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationItemContainer: {
    width: 80,
    height: 80,
  },
  navigationItemBody: {
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navigationItemFooter: {
    height: 20,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default NavigationItemComponent;
