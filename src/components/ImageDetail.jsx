import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";

const ImageDetail = ({title, imageSource}) => {
    return(
        <View style={{margin: 15}}>
            <Image source={imageSource} />
            <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerText: {
        textAlign: "center",
        backgroundColor: 'aqua',
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
});

export default ImageDetail;