import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
    return (
      <View style={styles.page}>
        <Text>Login</Text>
      </View>
    );
  };

  export default Login;

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

