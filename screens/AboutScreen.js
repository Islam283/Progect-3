
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Меня зовут Ислам мне 20 лет</Text>
      <Text style={styles.text}>Люблю заниматься програмированием, учусь в колледже</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default AboutScreen;
