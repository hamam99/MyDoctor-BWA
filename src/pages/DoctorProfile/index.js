import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem} from '../../components';

const DoctorProfile = ({navigation, route}) => {
    const doctor = route.params;

    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()}/>
            <Profile
                name={doctor.full_name}
                description={doctor.profofession}/>
            <Gap height={10}/>
            <ProfileItem
                label="Alumnus"
                value={doctor.university}/>
            <ProfileItem
                label="Tempat Praktik"
                value={doctor.hospital_address}/>
            <ProfileItem
                label="No. STR"
                value={doctor.str_number}/>
            <View style={styles.action}>
                <Button title="Start Consultation"/>
            </View>
        </View>
    );
};

export default DoctorProfile;

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
    },
    action:{
        paddingHorizontal:40,
        paddingTop: 13,
    },
});
