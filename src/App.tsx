import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BrandComponent from './components/BrandComponent';
import NavigationItemComponent from './components/NavigationItemComponent';

const App = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BrandComponent />
        </View>
        <View style={styles.navigation}>
          <NavigationItemComponent title="Work" icon="briefcase-outline" />
          <NavigationItemComponent title="Cart" icon="cart-outline" />
          <NavigationItemComponent title="Product" icon="diamond-outline" />
          <NavigationItemComponent title="Trans" icon="documents-outline" />
        </View>
        <View style={styles.order}>
          <Text style={styles.h1}>Order Again</Text>
          <ScrollView
            contentContainerStyle={{
              marginTop: 15,
              flexDirection: 'row',
              gap: 15,
            }}
            horizontal={true}
          >
            <View style={styles.cardOrder}>
              <View style={styles.cardBodyOrder}>
                <View style={styles.cardBodyOrderImage}></View>
                <View style={styles.cardBodyOrderText}></View>
              </View>
            </View>
            <View style={styles.cardOrder}>
              <View style={styles.cardBodyOrder}>
                <View style={styles.cardBodyOrderImage}></View>
                <View style={styles.cardBodyOrderText}></View>
              </View>
            </View>
            <View style={styles.cardOrder}>
              <View style={styles.cardBodyOrder}>
                <View style={styles.cardBodyOrderImage}></View>
                <View style={styles.cardBodyOrderText}></View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.favorite}>
          <Text style={styles.h1}>Local Favorite</Text>
          <View style={{ marginTop: 15 }}>
            <View style={styles.cardFavorite}>
              <View style={styles.cardBodyFavorite}></View>
            </View>
          </View>
        </View>
        <View style={styles.food}>
          <Text style={styles.h1}>Food</Text>
          <View style={{ marginTop: 15, gap: 15 }}>
            <View style={styles.cardFood}>
              <View style={styles.cardBodyFood}>
                <View style={styles.cardBodyFoodImage}></View>
                <View style={styles.cardBodyFoodText}></View>
              </View>
            </View>
            <View style={styles.cardFood}>
              <View style={styles.cardBodyFood}>
                <View style={styles.cardBodyFoodImage}></View>
                <View style={styles.cardBodyFoodText}></View>
              </View>
            </View>
            <View style={styles.cardFood}>
              <View style={styles.cardBodyFood}>
                <View style={styles.cardBodyFoodImage}></View>
                <View style={styles.cardBodyFoodText}></View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d90429',
    flex: 1,
  },
  header: {
    backgroundColor: '#d90429',
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  navigation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  order: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  favorite: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  food: {
    backgroundColor: '#FFFFFF',
    padding: 20,
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
  cardFavorite: {
    height: 140,
  },
  cardBodyFavorite: {
    flex: 1,
    backgroundColor: '#ADB5BD',
    borderRadius: 8,
  },
  cardFood: {
    flex: 1,
  },
  cardBodyFood: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  cardBodyFoodImage: {
    width: 100,
    height: 100,
    backgroundColor: '#ADB5BD',
    borderRadius: 8,
  },
  cardBodyFoodText: {
    flex: 1,
    marginStart: 10,
    backgroundColor: '#CED4DA',
  },
});

export default App;
