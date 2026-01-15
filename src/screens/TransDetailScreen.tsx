import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nilai from '../services/nilai';
import { Nilai as NilaiModel } from '../models/nilai';

const TransDetailScreen = ({ route }: any) => {
  const { id } = route.params;

  const [nilai, setNilai] = useState<NilaiModel>({} as NilaiModel);

  const getNilaiById = async () => {
    try {
      const response = await Nilai.getNilaiById(id);

      setNilai(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNilaiById();
  }, []);

  return (
    <View style={styles.container}>
      <Text>NIM</Text>
      <View style={styles.input}>
        <Text>{nilai.nim}</Text>
      </View>
      <Text>MK</Text>
      <View style={styles.input}>
        <Text>{nilai.mk}</Text>
      </View>
      <Text>Nilai</Text>
      <View style={styles.input}>
        <Text>{nilai.nilai}</Text>
      </View>
      <Text>Grade</Text>
      <View style={styles.input}>
        <Text>{nilai.grade}</Text>
      </View>
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
    backgroundColor: '#e0e0e0',
  },
});

export default TransDetailScreen;
