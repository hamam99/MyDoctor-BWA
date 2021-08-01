import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Header, List } from '../../components';
import { Fire } from '../../config';
import { colors, showError } from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
    const itemCategory = route.params;

    const [listDoctors, setListDoctors] = useState([]);
    useEffect(() => {
        callDoctorByCategory(itemCategory.category);
    }, [itemCategory.category]);

    const callDoctorByCategory = (categorySelected) => {
        Fire.database()
        .ref('doctors/')
        .orderByChild('category')
        .equalTo(categorySelected)
        .once('value')
        .then(res => {
          console.log('res', res.val());

          if (!res.val()) {
            return;
          }

          const oldData = res.val();
          const newData =  [];
          Object.keys(oldData).forEach(key => {
              newData.push({
                  id: key,
                  data: oldData[key],
              });
          });

        setListDoctors(newData);
        })
        .catch(err => {
          showError(err.message);
        });

    };

    console.log('list doctor', listDoctors);
    return (
        <View style={styles.page}>
           <Header
                title={`Pilih ${itemCategory.category}`}
                type="dark"
                onPress={() => navigation.goBack()}
                />
            {listDoctors.map((doctor, i) =>{
                console.log('doctor', doctor);
                return (
                    <List
                        key={i}
                        profile={{uri: doctor.data.photo}}
                        name={doctor.data.full_name}
                        description={doctor.data.gender}
                        type="next"
                        onPress={() => navigation.navigate('DoctorProfile', doctor.data)}
                        />
                );
            })}
        </View>
    );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
    page: {
        backgroundColor : colors.white,
        flex:1,
    },
});
