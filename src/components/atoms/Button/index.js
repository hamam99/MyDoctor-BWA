import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Button = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>I am button</Text>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  page: {
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
});
