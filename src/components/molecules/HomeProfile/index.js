import React, { useState, useEffect } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ILNullPhoto } from '../../../assets';
import { colors, fonts, getData } from '../../../utils';

const HomeProfile = ({onPress}) => {
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profession:'',
    });



  useEffect(() => {
    getData('user').then(user => {
        user.photo = {uri: user.photo};
        console.log(user);
        setProfile(user);
    });
  }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profression}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
    },
    avatar: {
        width:46,
        height:46,
        borderRadius: 46 / 2,
    },
    name:{
        fontSize:20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    professtion: {
        fontSize:12,
        fontFamily: fonts.primary[400],
        color:colors.text.secondary,
    },
});
export default HomeProfile;
