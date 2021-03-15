import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { colors, fonts } from '../../utils';

const Messages = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>
        {'Messzsges Pages'}
      </Text>
    </View>
  );
};
export default Messages;

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
