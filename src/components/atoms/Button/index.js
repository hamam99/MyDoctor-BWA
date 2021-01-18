import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.title(type)}>{title}</Text>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: (type) =>({
    backgroundColor:type === 'secondary' ? 'white' : '#0BCAD4',
    borderRadius:10,
    paddingVertical:10,
  }),
  title: (type) => ({
    fontSize:   16,
    fontWeight: '600',
    color: type === 'secondary' ? 'black' : 'white',
    textAlign:'center',
  }),
});
