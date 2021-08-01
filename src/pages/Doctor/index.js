import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { colors, fonts, showError } from '../../utils';
import { DoctorCategory, HomeProfile, RatedDoctor, NewsItem } from '../../components/molecules';
import { Gap } from '../../components/atoms';
import {DummyDoctor1} from '../../assets';
import { Fire } from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [topRatedDoctors, setTopRatedDoctors] = useState([]);

  useEffect(() => {
    getNews();
    getCategoryDoctor();
    getTopRatedDoctors();
  },[]);

  const getNews = () => {
    Fire.database()
    .ref('news/')
    .once('value')
    .then(res => {
      if (!res.val()) {
        return;
      }

      setNews(res.val());
    })
    .catch(err => {
      showError(err.message);
    });
  };

  const getCategoryDoctor = () => {
    Fire.database()
    .ref('category_doc/')
    .once('value')
    .then(res => {
      console.log('res', res.val());

      if (!res.val()) {
        return;
      }

      setCategoryDoctor(res.val());
    })
    .catch(err => {
      showError(err.message);
    });
  };

  const getTopRatedDoctors = () => {
    Fire.database()
    .ref('doctors/')
    .orderByChild('rate')
    .limitToLast(3)
    .once('value')
    .then(res => {
      console.log('res', res.val());

      if (!res.val()) {
        return;
      }

      setTopRatedDoctors(res.val());
    })
    .catch(err => {
      showError(err.message);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30}/>
          <View style={styles.wrapperSection}>
            <HomeProfile
              onPress={() =>{navigation.navigate('UserProfile');}}
            />
            <Text style={styles.welcome}> {'Mau konsultasi dengan siapa hari ini?'} </Text>
           </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32}/>
                {
                  categoryDoctor.map(category => {
                    return (
                      <DoctorCategory
                        key={category.id}
                        category={category.category}
                        onPress={() => {
                          navigation.navigate('ChooseDoctor');
                        }}
                      />
                    );
                  })
                }
                <Gap width={22}/>
              </View>
            </ScrollView>

          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.selectionLabel}>Top Rated Doctors</Text>
            {topRatedDoctors.map(doctor=> {
              return (
                <RatedDoctor
                  key={doctor.id}
                  name={doctor.full_name}
                  desc={doctor.profession}
                  avatar={{uri : doctor.photo}}
                  onPress={() => {
                    navigation.navigate('DoctorProfile', {doctorId: doctor.id});
                  }}
                />
              );
            })}
          </View>
          <Text style={styles.selectionLabel}>Good News</Text>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
          <Gap height={30}/>
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:colors.secondary,
  },
  content:{
    backgroundColor:colors.white,
    flex:1,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
  },
  title: {
    fontSize: 28,
    marginTop: 91,
    color:'white',
    fontFamily: fonts.primary[600],
  },
  welcome: {
    fontSize:20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop:30,
    marginBottom:16,
    maxWidth:210,
  },
  category:{
    flexDirection:'row',
  },
  wrapperScroll: {
    marginHorizontal:-16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  selectionLabel:{
    fontSize:16,
    fontFamily:fonts.primary[700],
    color: colors.text.primary,
    marginTop:30,
    marginBottom:16,
    marginLeft:16,
  },
});
