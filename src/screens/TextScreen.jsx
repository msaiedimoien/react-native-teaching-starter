import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.view}>
            <Text style={styles.firstText}>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                value={name}
                onChangeText={e => setName(e)}
            />
            <Text style={styles.secondText}>Your name is {name}</Text>

            <Text style={styles.firstText}>{"\n"}Enter your password:</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={e => setPassword(e)}
            />
            {password.length < 5 ? <Text style={{marginLeft: 5, color: 'tomato'}}>Password must be longer than 5 characters!</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 30,
    },

    firstText: {
        fontSize: 30,
        margin: 5,
    },

    secondText: {
        fontSize: 20,
        margin: 5,
        marginTop: 15,
    },

    input: {
        fontSize: 25,
        textAlign: "center",
        borderColor: "brown",
        borderWidth: 1,
        padding: 5,
        margin: 5,
    },

    touchOpacity: {
        width: '70%',
        margin: 5,
    },
});

export default TextScreen;