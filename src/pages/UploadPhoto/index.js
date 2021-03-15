import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, fonts } from '../../utils';
import { Button, Gap, Header, Link } from '../../components';
import { IconAddPhoto, ILNullPhoto } from '../../assets';


const UploadPhoto  = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header
            title = "Upload Photo"
        />
        <View style={styles.content}>
            <View style = {styles.profile}>
                <View style = {styles.avatarWrapper}>
                    <Image
                        source = {ILNullPhoto}
                        style = {styles.avatar}
                    />
                    <IconAddPhoto style={styles.addPhoto}/>
                    </View>
                <Text style={styles.name}>Shayna Melidan</Text>
                <Text style={styles.profession}>Product Designer</Text>
            </View>
            <View >
                <Button title = "Upload And Continue" />
                <Gap height = {30}/>
                <Link title = "Skip for this" size= {16} align="center"/>
            </View>
        </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal:40,
    paddingBottom:64,
    flex:1,
    justifyContent:'space-between',
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: fonts.primary[600],
  },
  profile: {
      alignItems:'center',
      flex:1,
      justifyContent:'center',
  },
  avatarWrapper: {
      width:130,
      height:130,
      borderWidth:1,
      borderColor : colors.border,
      borderRadius: 130 / 2,
      alignItems:'center',
      justifyContent:'center',
  },
  avatar: {
      width:110,
      height:110,
  },
  addPhoto: {
      position:'absolute',
      bottom:8,
      right:6,
  },
  name: {
      fontSize:24,
      color: colors.text.primary,
      fontFamily: fonts.primary[600],
      textAlign:'center',

  },
  profession: {
      fontSize:19,
      fontFamily: fonts.primary.normal,
      textAlign:'center',
      color: colors.text.secondary,
  },
});
