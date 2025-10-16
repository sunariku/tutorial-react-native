import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={styles.foto}
            source={{ uri: 'https://subali.stikom-bali.ac.id/images/AGS.jpg' }}
          />
        </View>
        <TextInput style={styles.formConttrol} placeholder="Nama Anda" />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Submit Diklik')}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: 'center'
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  foto: {
    width: 150,
    height: 230,
  },
  formConttrol: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    margin: 10,
  },
  button: {
    backgroundColor: '#f00',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
});

export default App;
