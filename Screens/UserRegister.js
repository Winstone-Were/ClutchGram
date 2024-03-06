import { View} from 'react-native';
import React from 'react';
import { Button, Text, TextInput } from 'react-native-paper';


export default function UserRegister() {
    return (
        <View style={styles.container}>
            <TextInput placeholder='user-name'/>
            <TextInput placeholder='phone-number'/>
            <Button> Select Image </Button>
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