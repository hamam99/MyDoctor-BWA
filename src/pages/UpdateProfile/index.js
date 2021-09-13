import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';
import {Header, Profile, Input, Button, Gap} from '../../components';
import { Fire } from '../../config';
import { colors, getData } from '../../utils';

const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName:null,
        profession:null,
        email:null,
        password: null,
    });

    const [password, setPassword] = useState('');
    const [photo,setPhoto] = useState(ILNullPhoto);
    const [photoForDb,setPhotoForDb] = useState('');

    useEffect(() => {
        getData('user').then(user => {
            user.photo = {uri: user.photo};
            setProfile(user);
        });
      }, []);

    const update = () => {

        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message:'Password kurang dari 6 karakter',
                    type:'danger',
                });
            } else {
                updatePassword();
                updateProfileData();
                navigation.replace('MainApp');
            }
        } else {
            updateProfileData();
            navigation.replace('MainApp');
        }
    };

    const updatePassword = () => {
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password).catch(err => {
                    showMessage({
                        message:err.message,
                        type:'danger',
                    });
                });
            }
        });
    };

    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDb;

        Fire
        .database()
        .ref(`users/${profile.uid}/`)
        .update(data)
        .then(result => {
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type:'danger',
            });
        });
    };

    const onChangeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        });
    };

    const getImage = () => {
        const options = {
            quality: 0.5,
            maxWidth:200,
            maxHeight: 200,
            includeBase64: true,
        };

        launchImageLibrary(options, response =>{
            if (response.didCancel || response.errorMessage) {
                showMessage({
                    message:'Sepertinya kamu tidak memilih foto',
                    type:'danger',
                });

                return;
            }

            const assets = response.assets[0];
            setPhotoForDb(`data:${assets.type};base64, ${assets.base64}`);
            const source = {uri: assets.uri};
            setPhoto(source);

        });
    };

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()}/>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile
                        isRemove
                        photo={photo}
                        onPress={getImage}
                    />
                    <Gap height={26}/>
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value) => onChangeText('fullName', value)}/>
                    <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => onChangeText('profession', value)}/>
                    <Input label="Email" value={profile.email} disable onChangeText={(value) => onChangeText('email', value)}/>
                    <Input label="Password" value={password} onChangeText={(value) => setPassword(value)} secureTextEntry/>
                    <Gap height={40}/>
                    <Button title="Save Profile" onPress={()=> {
                        update();
                    }}/>
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
