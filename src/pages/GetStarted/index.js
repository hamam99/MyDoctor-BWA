import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets/ilustration';
import { Button } from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source= {ILGetStarted} style={styles.page}>
    <View>
      <ILLogo/>
      <Text style={styles.title}>
        {'Konsultasi dengan \ndokter jadi lebih \nmudah & fleksibel'}
      </Text>
    </View>
      <View>
        <Button title="Get Started"  />
        <View style= {{ height:16 }}/>
        <Button title="Sign In" type="secondary"/>
      </View>
    </ImageBackground>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding:40,
    justifyContent:'space-between',
  },
  title: {
    fontSize: 28,
    marginTop: 91,
    color:'white',
    fontFamily:'Nunito-SemiBold',
  },
});
