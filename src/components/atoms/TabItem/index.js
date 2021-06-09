import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconDoctorActive, IconDoctorInctive, IconHospitalActive, IconHospitalInactive, IconMessageActive, IconMessageInactive } from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({title,active,onPress,onLongPress}) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <IconDoctorActive/> : <IconDoctorInctive/>;
        }

        if (title === 'Messages') {
            return active ? <IconMessageActive/> : <IconMessageInactive/>;
        }

        if (title === 'Hospitals') {
            return active ? <IconHospitalActive/> : <IconHospitalInactive/>;
        }

        return <IconDoctorInctive/>;
    };

    return (
        <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        key={title}
        styles={styles.container}
        >
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    );


};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
    },
    text: (active) => ({
        fontSize:10,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop:4,
    }),
});
