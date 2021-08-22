import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe,text, date, photo}) => {
    if (isMe) {
        return <IsMe text={text} date={date}/>;
    }

    return <Other text={text} date={date} photo={photo}/>;
};

export default ChatItem;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems:'flex-end',
        paddingRight: 16,
    },
    chatContent:{
        width:'70%',
        padding:12,
        paddingRight: 18,
        backgroundColor: colors.cardLight,
        borderRadius:10,
        borderBottomRightRadius:0,
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary,
    },
    date:{
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8,
    },
});
