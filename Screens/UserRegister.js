import { View } from 'react-native';
import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';


export default function UserRegister() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState();

    const registerUser = async () => {
        firestore()
            .collection('Users')
            .add({
                name,
                phone,
                image
            })
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='user-name'
                onChangeText={text => setName(text)}
            />
            <TextInput
                placeholder='phone-number'
                onChangeText={text => setPhone(phone)}
            />
            <Button onPress={() => registerUser()}> Select Image </Button>
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