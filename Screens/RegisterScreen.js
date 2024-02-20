import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Button, TextField } from 'react-native-ios-kit'


import auth from '@react-native-firebase/auth';


export default function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async () => {
    console.log("Hello")
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <TextField
        placeholder={'Email'}
        onValueChange={text => setEmail(text)}
      />
      <TextField
        placeholder={'Password'}
        onValueChange={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button rounded inverted centered onPress={() => handleRegister()} >
        Register
      </Button>

      <Text> All ready Have an account ? </Text>
      <Button centered onPress={() => navigation.push("LoginScreen")}> Login Here </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { justifyContent: "center" },
  input: { marginVertical: 5, borderRadius: 0 },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  textContainer: { alignContent: 'center', alignItems: 'center' }

})