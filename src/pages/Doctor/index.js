import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { colors, fonts } from '../../utils';
import { DoctorCategory, HomeProfile, RatedDoctor, NewsItem } from '../../components/molecules';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HomeProfile/>
      <Text style={styles.welcome}> {'Mau konsultasi dengan siapa hari ini?'} </Text>
      <DoctorCategory/>
      <DoctorCategory/>
      <DoctorCategory/>
      <DoctorCategory/>
      <Text>Top Rated Doctors</Text>
      <RatedDoctor/>
      <RatedDoctor/>
      <RatedDoctor/>
      <Text>Goodf News</Text>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal:16,
    paddingVertical:30,
  },
  title: {
    fontSize: 28,
    marginTop: 91,
    color:'white',
    fontFamily: fonts.primary[600],
  },
  welcome: {
    fontSize:20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop:30,
    marginBottom:16,
    maxWidth:210,
  },
});
