import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ILCatUmum, ILCatPsikiater, ILCatObat} from '../../../assets';
import { colors, fonts } from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
    const Icon = () => {
        if (category === 'dokter umum') {
            return <ILCatUmum/>;
        }

        if (category === 'psikiater') {
            return <ILCatPsikiater/>;
        }

        if (category === 'dokter obat') {
            return <ILCatObat/>;
        }

        return <ILCatUmum/>;
    };

    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}
        >
            <Icon style={styles.illustaration}/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    );
};

export default DoctorCategory;

const styles = StyleSheet.create({
    container:{
        padding:12,
        backgroundColor: colors.cardLight,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        width:100,
        height:130,
    },
    illustaration:{
        marginBottom:28,
    },
    label:{
        fontSize:12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary,
    },
    category:{
        fontSize:12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
    },
});
