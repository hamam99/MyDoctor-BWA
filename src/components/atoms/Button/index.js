import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors, fonts } from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress = {}, icon, disable}) => {
  if (type === 'icon-only') {
    return  (
      <IconOnly icon={icon}  onPress={onPress}/>
    );
  }

  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable}/>;
  }

  if (disable) {
    return (
      <View style={styles.disableBackground}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: (type) =>({
    backgroundColor:type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
    borderRadius:10,
    paddingVertical:10,
  }),
  disableBackground: {
    borderRadius:10,
    paddingVertical:10,
    backgroundColor:colors.button.disabled.backgroud,
  },
  title: (type) => ({
    fontSize:   18,
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
    textAlign:'center',
    fontFamily:fonts.primary[600],
  }),
  disableText:{
    fontSize:   18,
    color: colors.button.disabled.text,
    textAlign:'center',
    fontFamily:fonts.primary[600],
  },
});
