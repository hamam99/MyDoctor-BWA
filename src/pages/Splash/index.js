import React from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ILLogo} from '../../assets/ilustration';
import { Fire } from '../../config';
import { colors, fonts } from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
      Fire.auth().onAuthStateChanged(user =>{
        if (user) {
          navigation.replace('MainApp');
          return;
        }

        navigation.replace('GetStarted');
      });
    },1000);
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
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: fonts.primary[600],

  },
});
