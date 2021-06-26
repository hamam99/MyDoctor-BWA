import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets';
import List from '../../components/molecules/List';
import { colors, fonts } from '../../utils';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id:1,
      profile: DummyDoctor1,
      name: 'Alexander Jannie',
      description:'Baik ibu, terima kasih abanyaktunya...',
    },
    {
      id:2,
      profile: DummyDoctor2,
      name: 'Naerobi Putri Hayka',
      description:'Oh Tentu saja tidak karena jeruk itu...',
    },
    {
      id:3,
      profile: DummyDoctor3,
      name: 'John Mc Parker Steve',
      description:'Oke menurut pak dokter bagaimana untuk',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}> {'Messages'} </Text>
        {
          doctors.map(doctor => {
            return (
              <List
                key={doctor.id}
                profile={doctor.profile}
                name={doctor.name}
                description={doctor.description}
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
