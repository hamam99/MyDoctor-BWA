import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, fonts, getChatTime, getData, setDateChat, showError } from '../../utils';
import { Fire } from '../../config';

const Chat = ({navigation, route}) => {
    const doctor = route.params ?? {};
    const [chatContent, setChatContent] = useState('');
    const [user, setUser] = useState({});
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        getDataUserFromLocal();

        const chatID = `${user.uid}_${doctor.uid}`;
        const urlFirebase = `chatting/${chatID}/allchat/`;
        Fire.database().ref(urlFirebase).on('value', (snapshot) => {
            const dataSnapshot = snapshot.val();

            if (!dataSnapshot){
                return;
            }

            const allDataChat = [];
            Object.keys(dataSnapshot).map(key => {
                const dataChat = dataSnapshot[key];
                const newDataChat = [];

                Object.keys(dataChat).map(itemChat => {
                    newDataChat.push({
                        id: itemChat,
                        data: dataChat[itemChat],
                    });
                });

                allDataChat.push({
                    id: key,
                    data: newDataChat,
                });
            });

            setChatData(allDataChat);

        });

    // },[doctor.uid, user.uid]);
    },[doctor?.uid, user?.uid]);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        });
    };

    // const getDataChatting = () => {
    //     const chatID = `${user.uid}_${doctor.uid}`;
    //     const urlFirebase = `chatting/${chatID}/allchat`;
    //     Fire.database().ref(urlFirebase).on('value', (snapshot) => {
    //     });
    // };

    const chatSend = () => {
        // send to firebase
        const today = new Date();
        const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent,
        };

        const chatID = `${user.uid}_${doctor.uid}`;
        const urlFirebase = `chatting/${chatID}/allchat/${setDateChat(today)}`;
        const urlMessagesUser = `messages/${user.uid}/${chatID}`;
        const urlMessagesDoctor = `messages/${doctor.uid}/${chatID}`;
        const dataHistoryChatForUser = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: doctor.uid,
        };
        const dataHistoryChatForDoctor = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: user.uid,
        };

        Fire.database()
        .ref(urlFirebase)
        .push(data)
        .then(result => {
            setChatContent('');

            Fire
            .database()
            .ref(urlMessagesUser)
            .set(dataHistoryChatForUser);

            Fire
            .database()
            .ref(urlMessagesDoctor)
            .set(dataHistoryChatForDoctor);
        })
        .catch(error => {
            showError(error.message);
        });
    };

    return (
        <View style={styles.page}>
            <Header
                type="dark-profile"
                title={doctor.full_name}
                desc={doctor.category}
                onPress={() => navigation.goBack()}
                photo={{uri: doctor.photo}}
            />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        chatData.map((chat, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.chatDate}>{chat.id}</Text>
                                    {
                                        chat.data.map((itemChat) => {
                                            const isMe = itemChat.data.sendBy === user.uid;
                                            return (
                                                <ChatItem
                                                    key={itemChat.id}
                                                    isMe={isMe}
                                                    text={itemChat.data.chatContent}
                                                    date={itemChat.data.chatTime}
                                                    photo={{uri: doctor.photo}}
                                                />
                                            );
                                        })
                                    }
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
            <InputChat
                value={chatContent}
                onChangeText={(text) => {setChatContent(text);}}
                onButtonPress={chatSend}
            />
        </View>
    );
};

export default Chat;


const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex:1,
    },
    content:{
        flex:1,
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign:'center',
    },
});
