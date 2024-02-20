import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';


import { Button, TextField } from 'react-native-ios-kit'

export default function HomeScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextField
        placeholder={'Email'}
        onValueChange={text => setEmail(email)}
      />
      <TextField
        placeholder={'Password'}
        onValueChange={text => setPassword(password)}
        secureTextEntry={true}
      />
      <Button rounded inverted centered color="black">
        Register
      </Button>

      <Text> Don't Have an account ? </Text>
      <Button centered onPress={()=> navigation.push("RegisterScreen")}> Register Here </Button> 
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