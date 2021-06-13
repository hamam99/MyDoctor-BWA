import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import { DummyHopital1, DummyHopital2, DummyHopital3, ILHospitalBG } from '../../assets';
import { ListHospital } from '../../components';
import { colors, fonts } from '../../utils';

const Hospitals = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 Kamar tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type={'Rumah Sakit'}
          name={'Bugna cItra Merdeka'}
          address={'Jln. Surya Sejahtera 20'}
          picture={DummyHopital1}
        />
        <ListHospital
          type={'Rumah Sakit Anak'}
          name={'Happy Family Kids'}
          address={'Jln. Surya Sejahtera 20'}
          picture={DummyHopital2}
        />
        <ListHospital
          type={'Rumah Sakit Jiwa'}
          name={'Tingkatan Paling Atas'}
          address={'Jln. Surya Sejahtera 20'}
          picture={DummyHopital3}
        />
      </View>


    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:colors.secondary,
  },
  background: {
    height: 240,
    paddingTop:30,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius:20,
    flex:1,
    marginTop:-30,
    paddingTop: 14,
  },
  title: {
    fontSize: 20,
    color:colors.white,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  desc:{
    fontSize: 14,
    color:colors.white,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
    marginTop:6,
  },
});
