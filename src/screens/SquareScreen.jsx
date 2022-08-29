import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const alertOut = `You can't get color after that`;
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? alert(alertOut) : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? alert(alertOut) : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? alert(alertOut) : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                color='Red'
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            />
            <ColorCounter
                color='Green'
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            />
            <ColorCounter
                color='Blue'
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
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

export default SquareScreen;