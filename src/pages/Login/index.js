import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ILLogo } from '../../assets/ilustration';
import {
  Button,
  Gap,
  Input,
  Link,
} from '../../components';
import { Fire } from '../../config';
import { colors, fonts, storeData, useForm } from '../../utils';
import Loading  from '../Loading';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email:'', password:''});
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    Fire
    .auth()
    .signInWithEmailAndPassword(form.email, form.password)
    .then(result => {
      setLoading(false);

      Fire.database().ref(`users/${result.user.uid}/`).once('value').then(resultDB => {
        console.log('dataase','result',result);

        console.log('dataase','resultDB.val',resultDB.val);
        console.log('dataase','resultDB.val()',resultDB.val());
        if (resultDB.val()) {
          storeData('user', resultDB.val());
          navigation.navigate('MainApp');
        }
      });
    })
    .catch(error =>{
      setLoading(false);
      showMessage({
        type:'danger',
        message: error.message,
      });
    });
  };

    return (
      <>
        <View style={styles.page}>
          <ILLogo/>
          <Text style = {styles.title}>Login</Text>
          <Input
            label = "Email Address"
            value={form.email}
            onChangeText={email => setForm('email', email)}
          />
          <Gap height = {24}/>
          <Input
            label = "Password"
            value={form.password}
            onChangeText={password => setForm('password', password)}
            secureTextEntry
            />
          <Gap height = {10}/>
          <Link title = "Forgot My Password" size = {12}/>
          <Gap height = {40}/>
          <Button
            title="Sign In"
            onPress={login}/>
          <Gap height = {30}/>
          <Link title = "Create New Account" size = {16} align= "center" onPress={() => navigation.navigate('Register')}/>
        </View>
        {loading && <Loading />}
        </>
    );
  };

  export default Login;

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      padding: 40,
      backgroundColor: colors.white,
    },
    title: {
      fontSize:20,
      fontFamily: fonts.primary[600],
      color:colors.text.primary,
      marginTop:40,
      marginBottom:40,
      maxWidth:153,
    },
  });

