import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import { colors } from '../../utils';

const UpdateProfile = () => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile"/>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile
                        name="Hamam"
                        description="Product Designer"
                    />
                    <Gap height={26}/>
                    <Input label="Full Name"/>
                    <Input label="Pekerjaan"/>
                    <Input label="Email"/>
                    <Input label="Password"/>
                    <Gap height={40}/>
                    <Button title="Save Profile"/>
                </View>
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1,
    },
    content:{
        padding:40,
        paddingTop:0,
    },
});
