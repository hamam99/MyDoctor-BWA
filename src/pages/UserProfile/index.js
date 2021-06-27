import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Profile, Header,List, Gap} from '../../components';

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title="Profile"/>
            <Gap height={10}/>
            <Profile/>
            <Gap height={14}/>
            <List
                name="Edit Profile"
                description="Last updated yesterday"
                type="next"
                icon="edit-profile"
                onPress={() => navigation.navigate('UpdateProfile')}
                />
            <List
                name="Language"
                description="Available 12 languages"
                type="next"
                icon="language"
                onPress={() => navigation.navigate('UpdateProfile')}
                />
            <List
                name="Give Us Rate"
                description="On Google Play Store"
                type="next"
                icon="rate"
                onPress={() => navigation.navigate('UpdateProfile')}
                />
            <List
                name="Help Center"
                description="Read our Guideline"
                type="next"
                icon="help"
                onPress={() => navigation.navigate('UpdateProfile')}
                />
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
});
