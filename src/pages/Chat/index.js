import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, fonts } from '../../utils';

const Chat = () => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Nairobi"/>
                   <View tyle={{flex:1}}>
                       <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
                        <ChatItem isMe/>
                        <ChatItem/>
                        <ChatItem isMe/>
                   </View>
            <InputChat/>
        </View>
    );
};

export default Chat;


const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign:'center',
    },
});
