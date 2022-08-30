import React, {useReducer} from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";

const CHANGE_COUNT = 1;
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        default:
            return state;
    };
};

const CounterScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;

    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='increment'
                    onPress={() => dispatch({type: 'increment', payload: CHANGE_COUNT})}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='decrement'
                    onPress={() => dispatch({type: 'decrement', payload: CHANGE_COUNT})}
                />
            </TouchableOpacity>
            <Text>Current Count:</Text>
            <Text
                style={{fontSize: 40,margin: 35,
                    color: state.count > 0 ? 'green' : (state.count === 0 ? 'brown' : 'red'),}}
            >
                {count}
            </Text>
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
});

export default CounterScreenReducer;