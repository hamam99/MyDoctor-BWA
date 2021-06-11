import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { colors, fonts } from '../../utils';
import { DoctorCategory, HomeProfile, RatedDoctor, NewsItem } from '../../components/molecules';

const Doctor = ({navigation}) => {
  return (
    <View>
      <HomeProfile/>
      <Text >
        {'Doctor Pages'}
      </Text>
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
    padding:40,
    justifyContent:'space-between',
    backgroundColor:colors.white,
  },
  title: {
    fontSize: 28,
    marginTop: 91,
    color:'white',
    fontFamily: fonts.primary[600],
  },
});
