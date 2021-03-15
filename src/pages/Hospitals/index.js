import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { colors, fonts } from '../../utils';

const Hospitals = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>
        {'Hospitals Pages'}
      </Text>
    </View>
  );
};
export default Hospitals;

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
