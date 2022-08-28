import React, {useState} from "react";
import { View, Button, StyleSheet, TouchableOpacity, FlatList} from "react-native";

const ColorScreen = () => {
    const [colors, setColor] = useState([]);

    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        setColor([...colors, `rgb(${red}, ${green}, ${blue})`]);
    }

    return(
        <View style={styles.view}>
            <TouchableOpacity style={styles.touchOpacity}>
                <Button
                    title='Add a Color'
                    onPress={randomRgb}
                />
            </TouchableOpacity>
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({item}) => <View style={{height: 200, width: 200, backgroundColor: `${item}`}}></View>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
    },

    touchOpacity: {
        width: '70%',
        margin: 15,
        padding: 10,
    },
});

export default ColorScreen;