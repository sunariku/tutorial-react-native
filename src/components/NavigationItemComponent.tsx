import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

const NavigationItemComponent = ({ title = '', icon = '', page = '' }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationItemContainer}>
      <Pressable onPress={() => navigation.navigate(page)} style={{ flex: 1 }}>
        <View style={styles.navigationItemBody}>
          <Ionicons name={icon} size={32} color={'#ef233c'} />
        </View>
        <View style={styles.navigationItemFooter}>
          <Text style={{ color: '#d90429', fontWeight: 'bold' }}>{title}</Text>
        </View>
      </Pressable>
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
