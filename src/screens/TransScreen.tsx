import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Nilai from '../services/nilai';
import { Nilai as NilaiModel } from '../models/nilai';
import { SafeAreaView } from 'react-native-safe-area-context';

const TransScreen = () => {
  const [nilai, setNilai] = useState<NilaiModel[]>([]);

  const getNilai = async () => {
    try {
      const response = await Nilai.getNilai();

      setNilai(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNilai();
  }, []);

  const renderItem: ListRenderItem<NilaiModel> = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.nim} - {item.mk}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 10,
            fontSize: 20,
          }}
        >
          Data
        </Text>
        <FlatList<NilaiModel>
          style={{ flex: 1 }}
          data={nilai}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
  },
});

export default TransScreen;
