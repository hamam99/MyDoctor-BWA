import React from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ILLogo} from '../../assets/ilustration';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    },3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#112340',
    marginTop: 20,
    fontFamily:'Nunito-SemiBold',
  },
});
