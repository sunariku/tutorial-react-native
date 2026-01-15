import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import Nilai from '../services/nilai';
import { Nilai as NilaiModel } from '../models/nilai';

const TransScreen = () => {
  const navigation = useNavigation();

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
    <Pressable
      onPress={() => navigation.navigate('TransDetail', { id: item.id })}
    >
      <View style={styles.item}>
        <Text style={styles.title}>
          {item.nim} - {item.mk}
        </Text>
        <View>
          <Ionicons name="arrow-forward" size={20} color={'#ef233c'} />
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>
        <Pressable
          style={{ backgroundColor: '#d90429', padding: 10, borderRadius: 4 }}
          onPress={() => navigation.navigate('TransCreate')}
        >
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
            Buat Trans
          </Text>
        </Pressable>
      </View>
      <FlatList<NilaiModel>
        style={{ flex: 1 }}
        data={nilai}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  item: {
    borderColor: '#ADB5BD',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
  },
});

export default TransScreen;
