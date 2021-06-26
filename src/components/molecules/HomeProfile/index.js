import React from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DummyUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

const HomeProfile = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={DummyUser} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.profression}>Product Designer</Text>
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
