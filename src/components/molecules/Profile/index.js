import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DummyUser, IconRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile = ({name, description, isRemove, photo, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.borderProfile}  onPress={() => {
                if (!isRemove) {
                    return;
                }

                onPress();
            }}>
                <Image source={photo} style={styles.avatar} />
               {isRemove &&  <IconRemovePhoto style={styles.removePhoto}/>}
            </TouchableOpacity>
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{description}</Text>
                </View>
            )}
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignItems:'center',
},
avatar:{
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
},
borderProfile:{
    width: 130,
    height:130,
    borderRadius:130 / 2,
    borderWidth:1,
    borderColor:colors.border,
    justifyContent:'center',
    alignItems:'center',
},
name:{
    fontSize:20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign:'center',
},
profession:{
    fontSize:16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign:'center',
},
removePhoto:{
    position:'absolute',
    right:8,
    bottom:8,
},
});
