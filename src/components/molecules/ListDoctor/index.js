import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DummyDoctor2, IconNext} from '../../../assets';
import { colors, fonts } from '../../../utils';

const ListDoctor = ({profile, name, description, type, onPress = {}}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile} style={styles.avatar}/>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
            {
                (type === 'next') && <IconNext/>
            }
        </TouchableOpacity>
    );
};

export default ListDoctor;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems:'center',
        justifyContent: 'space-between',
    },
    content: {
        flex:1,
    },
    avatar:{
        width: 46,
        height:46,
        borderRadius:46 / 2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,

    },

});
