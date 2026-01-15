import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import TransScreen from './screens/TransScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import LoginScreen from './screens/LoginScreen';
import TransDetailScreen from './screens/TransDetailScreen';
import TransCreateScreen from './screens/TransCreateScreen';

const Stack = createNativeStackNavigator();
const Root = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen
        name="Trans"
        component={TransStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TransStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransAll"
        component={TransScreen}
        options={{ title: 'Trans All' }}
      />
      <Stack.Screen
        name="TransDetail"
        component={TransDetailScreen}
        options={{ title: 'Trans Detail' }}
      />
      <Stack.Screen
        name="TransCreate"
        component={TransCreateScreen}
        options={{ title: 'Trans Create' }}
      />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={'#ef233c'} />
          ),
        }}
      />
      <Tab.Screen
        name="Trans"
        component={TransStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="documents-outline" size={24} color={'#ef233c'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="MainTab">
        <Root.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default App;
