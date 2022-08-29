import React from "react";
import {View, StyleSheet, Button, Text, TouchableOpacity} from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return (
        <View style={styles.view}>
            <Text>{color}</Text>
            <TouchableOpacity style={styles.touchOpacity}>
                <Button
                    title={`More ${color}`}
                    onPress={() => onIncrease()}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpacity}>
                <Button
                    title={`Less ${color}`}
                    onPress={() => onDecrease()}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 20,
    },

    touchOpacity: {
        width: '70%',
        margin: 5,
    },
});

export default ColorCounter;