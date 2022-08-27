import React from "react";
import {Text, View, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View style={styles.view}>
        <ImageDetail title='Show Forest' imageSource={require('../../assets/forest.jpg')} />
        <ImageDetail title='Show Mountain' imageSource={require('../../assets/mountain.jpg')} />
        <ImageDetail title='Show Beach' imageSource={require('../../assets/beach.jpg')} />
    </View>
}

const styles = StyleSheet.create({
    view: {
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        margin: 15
    },
});

export default ImageScreen;