import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ListDoctor from '../../components/molecules/ListDoctor';
import { colors, fonts } from '../../utils';

const Messages = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}> {'Messages'} </Text>
        <ListDoctor/>
        <ListDoctor/>
        <ListDoctor/>
      </View>
    </View>
  );
};
export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex:1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
  },
  title: {
    fontSize: 20,
    color:colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
