import React from 'react';
import { View, Text } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';

const Chat = () => {
    return (
        <View>
            <Header title="Nairobi"/>
            <Text>Senin, 21 Maret 2020</Text>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <InputChat/>
        </View>
    );
};

export default Chat;
