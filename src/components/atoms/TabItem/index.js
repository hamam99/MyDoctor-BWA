import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconDoctorActive, IconDoctorInctive, IconHospitalActive, IconHospitalInactive, IconMessageActive, IconMessageInactive } from '../../../assets';

const TabItem = ({title}) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return <IconDoctorInctive/>;
        }

        if (title === 'Messages') {
            return <IconMessageInactive/>;
        }

        if (title === 'Hospitals') {
            return <IconHospitalInactive/>;
        }

        return <IconDoctorInctive/>;
    };

    return (
        <View key={title}>
            <Icon/>
            <Text>{title}</Text>
        </View>
    );


};

export default TabItem;

const styles = StyleSheet.create({});
