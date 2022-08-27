import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const myName = 'Mustafa';

    return(
        <View>
            <Text style={styles.firstLine}>Getting started with react native</Text>
            <Text style={styles.secondLine}>My name is: {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    firstLine: {
        fontSize: 30,
    },

    secondLine:{
        fontSize: 20,
    }
});

export default ComponentsScreen;