import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ILLogo} from '../../assets/ilustration';
import { Button } from '../../components';

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <ILLogo/>
      <Text style={styles.title}>Konsultasi dengandokter jadi lebih mudah & fleksibel </Text>
      <Button />
      <Button />
    </View>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
});
