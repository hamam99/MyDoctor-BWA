import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors, fonts } from '../../../utils';
import { DummyDoctor1 } from '../../../assets';

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar}/>
            <View style={{flex:1}}>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>Bukan masalah</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    );
};

export default Other;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingRight: 16,
        flexDirection:'row',
        alignItems:'flex-end',
    },
    chatContent:{
        width:'80%',
        padding:12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        borderRadius:10,
        borderBottomLeftRadius:0,
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white,
    },
    date:{
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8,
    },
    avatar: {
        width: 30,
        height:30,
        borderRadius: 30 / 2,
        marginRight: 12,
    },
});
