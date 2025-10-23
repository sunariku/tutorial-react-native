import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.brandContainer}></View>
        </View>
        <View style={styles.navigation}>
          <View style={styles.card}>
            <View style={styles.cardBody}></View>
            <View style={styles.cardFooter}>
              <Text>Footer</Text>
            </View>
          </View>
        </View>
        <View style={styles.order}>
          <Text style={styles.h1}>Order Again</Text>
          <View style={{ marginTop: 15 }}>
            <View style={styles.cardOrder}>
              <View style={styles.cardBodyOrder}>
                <View style={styles.cardBodyOrderImage}></View>
                <View style={styles.cardBodyOrderText}></View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.favorite}></View>
        <View style={styles.food}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9ECEF',
    flex: 1,
  },
  header: {
    backgroundColor: '#ADB5BD',
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  navigation: {
    padding: 20,
  },
  order: {
    padding: 20,
  },
  favorite: {
    backgroundColor: '#ADB5BD',
    height: 300,
  },
  food: {
    backgroundColor: '#495057',
    height: 400,
  },
  brandContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#495057',
    borderRadius: 50,
  },
  card: {
    width: 100,
    height: 110,
  },
  cardBody: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#212529',
  },
  cardFooter: {
    height: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  h1: {
    fontSize: 22,
  },
  cardOrder: {
    width: 320,
  },
  cardBodyOrder: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  cardBodyOrderImage: {
    width: 100,
    height: 100,
    backgroundColor: '#ADB5BD',
    borderRadius: 8,
  },
  cardBodyOrderText: {
    flex: 1,
    marginStart: 10,
    backgroundColor: '#CED4DA',
  },
});

export default App;
