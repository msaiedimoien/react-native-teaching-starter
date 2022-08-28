import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";

const CounterScreen = () => {
    const [count, setCount] = useState(0);

    const increaseNumber = () => {
        setCount(count + 1);
    }

    const decreaseNumber = () => {
        setCount(count - 1);
    }

    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='increase'
                    onPress={increaseNumber}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='decrease'
                    onPress={decreaseNumber}
                />
            </TouchableOpacity>
            <Text>Current Count:</Text>
            <Text style={styles.numberCount}>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    button: {
        borderRadius: 10,
        margin: 5,
        width: '70%',
    },

    numberCount: {
        fontSize: 40,
        margin: 35,
        color: 'green',
    }
});

export default CounterScreen;