import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Register = () => {

    return (
      <View style={styles.page}>
        <Text>Registration</Text>
      </View>
    );
  };

  export default Register;

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

