
import React, { useState } from 'react';
import { FlatList, View, Text, Image, RefreshControl, StyleSheet } from 'react-native';

const LanguagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const langs = [
    { id: '1', lang: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { id: '2', lang: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { id: '3', lang: 'Ruby', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg' },
    { id: '4', lang: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Java_programming_language_logo.svg' },
    { id: '5', lang: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.text}>{item.lang}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default LanguagesScreen;
