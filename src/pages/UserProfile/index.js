import React,{useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ILNullPhoto } from '../../assets';
import {Profile, Header,List, Gap} from '../../components';
import { Fire } from '../../config';
import { getData } from '../../utils';

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName:null,
        profession:null,
        photo: ILNullPhoto,
    });

    useEffect(() => {
        getData('user').then(user =>{
            user.photo = {uri: user.photo};
            setProfile(user);
        }).catch(err =>{
            console.log('error', err);
        });
    }, []);

    const signOut = () => {
        Fire.auth().signOut().then(res =>{
            navigation.replace('GetStarted');
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type:'danger',
            });
        });
    };

    return (
        <View style={styles.container}>
            <Header title="Profile" onPress={() => navigation.goBack()}/>
            <Gap height={10}/>
            <Profile name={profile.fullName} description={profile.profession} photo={profile.photo}/>
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
                name="Sign Out"
                description="To signout from app"
                type="next"
                icon="help"
                onPress={() => signOut()}
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
