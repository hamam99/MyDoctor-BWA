import React, {useState} from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets';
import List from '../../components/molecules/List';
import { Fire } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();

    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async snapshot =>{
      if (!snapshot.val()) {
        return;
      }

      const oldData = snapshot.val();
      const data = [];
      const promises = await Object.keys(oldData).map(async key => {
        const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
        const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
        data.push({
          id:key,
          detailDoctor: detailDoctor.val(),
          ...oldData[key],
        });
      });

      await Promise.all(promises);
      setHistoryChat(data);
    });
  },[user?.uid]);


  const getDataUserFromLocal = () => {
    getData('user').then(res => {
        setUser(res);
    });
};

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}> {'Messages'} </Text>
        {
          historyChat.map(chat => {
            return (
              <List
                key={chat.id}
                profile={{uri: chat.detailDoctor.photo}}
                name={chat.uidPartner}
                description={chat.lastContentChat}
                onPress={() => {
                  navigation.navigate('Chatting', chat.detailDoctor);
                }}
              />
            );
          })
        }
      </View>
    </View>
  );
};
export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex:1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
  },
  title: {
    fontSize: 20,
    color:colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
