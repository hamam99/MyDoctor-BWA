import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Header, ListDoctor } from '../../components';
import { colors } from '../../utils';

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
           <Header
                title="Pilih Dokter Anak"
                type="dark"
                onPress={() => navigation.goBack()}
                />
            <ListDoctor
                profile={DummyDoctor1}
                name="Alexander Janie"
                description="Wanita"
                type="next"
                onPress={() => navigation.navigate('Chatting')}
            />
            <ListDoctor
                profile={DummyDoctor1}
                name="Alexander Janie"
                description="Wanita"
                type="next"
                onPress={() => navigation.navigate('Chatting')}
            />
            <ListDoctor
                profile={DummyDoctor1}
                name="Alexander Janie"
                description="Wanita"
                type="next"
                onPress={() => navigation.navigate('Chatting')}
            />
            <ListDoctor
                profile={DummyDoctor1}
                name="Alexander Janie"
                description="Wanita"
                type="next"
                onPress={() => navigation.navigate('Chatting')}
            />
            <ListDoctor
                profile={DummyDoctor1}
                name="Alexander Janie"
                description="Wanita"
                type="next"
                onPress={() => navigation.navigate('Chatting')}
            />
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
