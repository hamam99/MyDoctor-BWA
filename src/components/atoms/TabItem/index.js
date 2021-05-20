import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconDoctorActive, IconHospitalActive, IconMessageActive } from '../../../assets';

const TabItem  = ({title}) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return <IconDoctorActive/>;
        }

        if (title === 'Messages') {
            return <IconMessageActive/>;
        }

        if (title === 'Hospitals') {
            return <IconHospitalActive/>;
        }

        return <IconDoctorActive/>; 
        </View>
    );
};

export default TabItem;

const styles = StyleSheet.create({});
