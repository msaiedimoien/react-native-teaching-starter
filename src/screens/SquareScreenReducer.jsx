import React, {useReducer} from "react";
import {View, StyleSheet, Text} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
    switch (action.type) {
        case 'red':
            return {...state,  red: state.red + action.payload}
        case 'green':
            return {...state, green: state.green + action.payload}
        case 'blue':
            return {...state, blue: state.blue + action.payload}
        default:
            return {...state}
    }
};

const SquareScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    const changeColor = (type, payload) => {
        (type === 'red' && (red + payload > 255 || red + payload < 0)) ||
        (type === 'green' && (green + payload > 255 || green + payload < 0)) ||
        (type === 'blue' && (blue + payload > 255 || blue + payload < 0)) ?
            alert('You can\'t get color after that') :
            dispatch({type: type, payload: payload});
    }

    // console.log(.);

    return (
        <View>
            <ColorCounter
                color='Red'
                onIncrease={() => changeColor('red', COLOR_INCREMENT)}
                onDecrease={() => changeColor('red', -1 * COLOR_INCREMENT)}
            />
            <ColorCounter
                color='Green'
                onIncrease={() => changeColor('green', COLOR_INCREMENT)}
                onDecrease={() => changeColor('green', -1 * COLOR_INCREMENT)}
            />
            <ColorCounter
                color='Blue'
                onIncrease={() => changeColor('blue', COLOR_INCREMENT)}
                onDecrease={() => changeColor('blue', -1 * COLOR_INCREMENT)}
            />
            <View
                style={{
                    margin: 25,
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
            <Text style={{
                marginLeft: 25,
                color: `rgb(${red},${green},${blue})`
            }}
            >
                rgb({red},{green},{blue})
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreenReducer;