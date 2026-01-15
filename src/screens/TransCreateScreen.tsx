import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Nilai from '../services/nilai';
import { Nilai as NilaiModel } from '../models/nilai';

const TransCreateScreen = () => {
  const [nim, setNim] = useState('');
  const [mk, setMk] = useState('');
  const [nilai, setNilai] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async () => {
    try {
      const data: NilaiModel = {
        nim,
        mk,
        nilai: +nilai,
        grade,
      };

      console.log(data);

      await Nilai.createNilai(data);

      Alert.alert('Pesan', 'Input Berhasil');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>NIM</Text>
      <TextInput style={styles.input} onChangeText={setNim} />
      <Text>MK</Text>
      <TextInput style={styles.input} onChangeText={setMk} />
      <Text>Nilai</Text>
      <TextInput style={styles.input} onChangeText={setNilai} />
      <Text>Grade</Text>
      <TextInput style={styles.input} onChangeText={setGrade} />
      <View style={{ height: 10 }} />
      <Pressable style={styles.button}>
        <Text
          style={{ color: '#FFFFFF', fontWeight: 'bold' }}
          onPress={handleSubmit}
        >
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 4,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#8a0017',
    backgroundColor: '#d90429',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
});

export default TransCreateScreen;
