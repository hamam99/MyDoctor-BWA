import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({type, title, onPress = {}}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress = {onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
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
    fontSize:   18,
    color: type === 'secondary' ? 'black' : 'white',
    textAlign:'center',
    fontFamily:'Nunito-SemiBold',
  }),
});
