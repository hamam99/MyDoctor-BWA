import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem} from '../../components';

const DoctorProfile = () => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile"/>
            <Profile name="Nairobi Prutri Hayza" description="Dokter Anak"/>
            <Gap height={10}/>
            <ProfileItem label="Alumnus" value="Universitas Indonesia, 2021"/>
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung"/>
            <ProfileItem label="No. STR" value="1234567890"/>
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
