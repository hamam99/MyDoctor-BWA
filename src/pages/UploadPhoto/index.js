import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors, fonts, storeData } from '../../utils';
import { Button, Gap, Header, Link } from '../../components';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { Fire } from '../../config';

const UploadPhoto = ({navigation, route = {}}) => {
    const {fullName,profession,uid} = route.params;
    const [hasPhoto,setHasPhoto] = useState(true);
    const [photo,setPhoto] = useState(ILNullPhoto);
    const [photoForDb,setPhotoForDb] = useState('');

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

            setHasPhoto(true);
            const source = {uri: assets.uri};
            setPhoto(source);
        });
    };

    const uploadAndContinue = () =>{
        Fire.database()
                .ref(`/users/${uid}/`)
                .update({photo: photoForDb});

        const data = route.params;
        data.photo = photoForDb;
        storeData('user',data);

        navigation.replace('MainApp');
    };

  return (
    <View style={styles.page}>
        <Header
            title="Upload Photo"
        />
        <View style={styles.content}>
            <View style={styles.profile}>
                <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                    <Image
                        source={photo}
                        style={styles.avatar}
                    />
                    { hasPhoto && <IconAddPhoto style={styles.addPhoto}/>}
                    { !hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>}
                    </TouchableOpacity>
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.profession}>{profession}</Text>
            </View>
            <View >
                <Button
                    title="Upload And Continue"
                    onPress={() => {
                        uploadAndContinue();
                    }}
                    disable={!hasPhoto}
                />
                <Gap height={30}/>
                <Link title="Skip for this" size= {16} align="center" onPress={() => navigation.replace('MainApp')}/>
            </View>
        </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal:40,
    paddingBottom:64,
    flex:1,
    justifyContent:'space-between',
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: fonts.primary[600],
  },
  profile: {
      alignItems:'center',
      flex:1,
      justifyContent:'center',
  },
  avatarWrapper: {
      width:130,
      height:130,
      borderWidth:1,
      borderColor : colors.border,
      borderRadius: 130 / 2,
      alignItems:'center',
      justifyContent:'center',
  },
  avatar: {
      width:110,
      height:110,
      borderRadius: 110 / 2,
      alignItems:'center',
      justifyContent:'center',
  },
  addPhoto: {
      position:'absolute',
      bottom:8,
      right:6,
  },
  name: {
      fontSize:24,
      color: colors.text.primary,
      fontFamily: fonts.primary[600],
      textAlign:'center',

  },
  profession: {
      fontSize:19,
      fontFamily: fonts.primary.normal,
      textAlign:'center',
      color: colors.text.secondary,
  },
});
