import React, { useState }  from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { Fire } from '../../config';
import { colors, useForm } from '../../utils';
import Loading from '../Loading';
import { showMessage, hideMessage } from 'react-native-flash-message';

const Register = ({navigation}) => {

  const [form, setForm] = useForm({
    fullName:'',
    profession:'',
    email:'',
    password:'',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    // navigation.navigate('UploadPhoto');
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        setLoading(false);
        setForm('reset');

        const user = userCredential.user;
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };

        Fire
        .database()
        .ref('users/' + user.uid + '/')
        .set(data);
      })
      .catch((error) => {
        setLoading(false);
        setForm('reset');
        const errorMessage = error.message;
        console.log('error', errorMessage);
        showMessage({
          message:errorMessage,
          type:'default',
          backgroundColor:colors.error,
          color: colors.white,
        });
      });
  };

  return (
      <>
        <View style={styles.page}>
          <Header
          title = {'Register'}
          onPress ={() => {
            navigation.goBack();
          }}/>
          <View style = {styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <Input
                label="Full Name"
                value={form.fullName}
                onChangeText={(value) => setForm('fullName',value)}
                />
              <Gap height={24}/>
              <Input
                label="Pekerjaan"
                value={form.profession}
                onChangeText={(value) => setForm('profession',value)}
                />
              <Gap height={24}/>
              <Input
                label="Email Address"
                value={form.email}
                onChangeText={(value) => setForm('email',value)}
                />
              <Gap height={24}/>
              <Input
                label="Password"
                value={form.password}
                onChangeText={(value) => setForm('password',value)}
                secureTextEntry={true}
                />
              <Gap height={40}/>
              <Button
                title= "Continue"
                onPress = {onContinue}
              />
          </ScrollView>
          </View>
        </View>
        {loading && <Loading/>}
      </>
    );
  };

  export default Register;

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: colors.white,
    },
    content: {
      padding:40,
      paddingTop:0,
    },
  });

