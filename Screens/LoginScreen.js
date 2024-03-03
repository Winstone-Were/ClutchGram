import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Button, Text, TextInput } from 'react-native-paper';
import auth  from 'firebase/auth';

export default function HomeScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const  loginAction = async()=>{
    auth().signInWithEmailAndPassword(email, password).then(()=>{
      console.log("User Logged In")
    }).catch(error=> console.error);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Email'}
        onValueChange={text => setEmail(email)}
      />
      <TextInput
        placeholder={'Password'}
        onValueChange={text => setPassword(password)}
        secureTextEntry={true}
      />
      <Button onPress={()=> loginAction()} >Click Here to Login </Button>

      <Text> Don't Have an account ? </Text>
      <Button onPress={()=> navigation.push("RegisterScreen")}> Register Here </Button> 
    </View>
  )
}        

const styles = StyleSheet.create({
  container: { justifyContent:"center" },
  input: { marginVertical: 5, borderRadius: 0 },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  textContainer: { alignContent: 'center', alignItems: 'center' }

})