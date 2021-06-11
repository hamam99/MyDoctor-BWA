import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { colors, fonts } from '../../utils';
import { DoctorCategory, HomeProfile, RatedDoctor, NewsItem } from '../../components/molecules';
import { Gap } from '../../components/atoms';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfile/>
        <Text style={styles.welcome}> {'Mau konsultasi dengan siapa hari ini?'} </Text>
        <View style={styles.wrapperScroll}>
          {/* <ScrollView horizontal> */}
          <View style={styles.category}>
            <Gap width={16}/>
              <DoctorCategory/>
              <DoctorCategory/>
              <DoctorCategory/>
              <DoctorCategory/>
              <Gap width={6}/>
            </View>
          {/* </ScrollView> */}

        </View>
        <Text style={styles.selectionLabel}>Top Rated Doctors</Text>
        <RatedDoctor/>
        <RatedDoctor/>
        <RatedDoctor/>
        <Text style={styles.selectionLabel}>Good News</Text>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:colors.secondary,
  },
  content:{
    backgroundColor:colors.white,
    flex:1,
    paddingHorizontal:16,
    paddingVertical:30,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
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
  category:{
    flexDirection:'row',
  },
  wrapperScroll: {
    marginHorizontal:-16,
  },
  selectionLabel:{
    fontSize:16,
    fontFamily:fonts.primary[600],
    color: colors.text.secondary,
    marginTop:30,
    marginBottom:16,

  },
});
