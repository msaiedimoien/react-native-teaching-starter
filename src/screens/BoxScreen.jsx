import React from "react";
import { Text,View,StyleSheet, ScrollView } from "react-native";

const BoxScreen = () => {
    return (
        <ScrollView>
            {/*Box Object Model*/}
            <Text style={styles.titleStyle}>Box Object Model:</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.bomText}>
                    margin\border\padding\CONTENT
                </Text>
            </View>

            {/*Flex Box*/}
            <Text style={styles.titleStyle}>Flex Box:</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> alignItems: 'stretch' (default)</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{alignItems: 'flex-start'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> alignItems: 'flex-start'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{alignItems: 'center'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> alignItems: 'center'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{alignItems: 'flex-end'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> alignItems: 'flex-end'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{flexDirection: 'column'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> flexDirection: 'column'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{flexDirection: 'row', height: 100}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> flexDirection: 'row'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{justifyContent: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> justifyContent: 'flex-start'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{justifyContent: 'center', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> justifyContent: 'center'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{justifyContent: 'flex-end', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> justifyContent: 'flex-end'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{justifyContent: 'space-between', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> justifyContent: 'space-between'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{justifyContent: 'space-around', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> justifyContent: 'space-around'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{flexDirection: 'row', justifyContent: 'space-around', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>justifyContent:{'\n'}'space-around'{"\n"}flexDirection: 'row'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{justifyContent: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parent --> justifyContent: 'flex-start'</Text>
                <Text style={[{flex: 1}, styles.Child3Text]}>in child --> flex: 1</Text>
            </View>

            <View style={[{justifyContent: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>in parent --> justifyContent: 'flex-start'</Text>
                <Text style={[{flex: 1}, styles.Child2Text]}>in child --> flex: 1</Text>
                <Text style={[{flex: 1}, styles.Child3Text]}>in child --> flex: 1</Text>
            </View>

            <View style={[{justifyContent: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>in parent --> justifyContent: 'flex-start'</Text>
                <Text style={[{alignSelf: 'flex-end'}, styles.Child2Text]}>in child --> alignSelf: 'flex-end'</Text>
                <Text style={[{flex: 1}, styles.Child3Text]}>in child --> flex: 1</Text>
            </View>

            {/*Position*/}
            <Text style={styles.titleStyle}>Position:</Text>
            <View style={[{justifyContent: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={[{flex: 1}, styles.Child1Text]}>in child --> flex: 1</Text>
                <Text style={[{position: 'absolute'}, styles.Child2Text]}>in child --> position: 'absolute'</Text>
                <Text style={[{flex: 1}, styles.Child3Text]}>in child --> flex: 1</Text>
            </View>

            <View style={[{justifyContent: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={[{flex: 1}, styles.Child1Text]}>in child --> flex: 1</Text>
                <Text style={[{top: 7, left: 15}, styles.Child2Text]}>in child --> top: 7, left: 15</Text>
                <Text style={[{flex: 1}, styles.Child3Text]}>in child --> flex: 1</Text>
            </View>

            <View style={[{justifyContent: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={[{flex: 1}, styles.Child1Text]}>in child --> flex: 1</Text>
                <Text style={[{...StyleSheet.absoluteFillObject}, styles.Child2Text]}>in child --> ...StyleSheet.absoluteFillObjects</Text>
                <Text style={[{flex: 1}, styles.Child3Text]}>in child --> flex: 1</Text>
            </View>

            <View style={[{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', height: 150, borderWidth: 1}, styles.viewStyle]}>
                <Text style={[{height: 50, width: 50}, styles.Child1Text]}/>
                <Text style={[{height: 50, width: 50, top: 40}, styles.Child2Text]}>top: 40</Text>
                <Text style={[{height: 50, width: 50}, styles.Child3Text]}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: "bold",
        paddingLeft: 10,
        paddingTop: 10,
    },

    viewStyle: {
        margin: 10,
        padding: 5,
        marginBottom: 30,
        // borderWidth: 1,
        borderColor: 'brown',
    },

    bomText: {
        margin: 25,
        borderWidth: 15,
        borderColor: 'greenyellow',
        paddingLeft: 50,
        paddingTop: 30,
    },

    Child1Text: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow'
    },

    Child2Text: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'aqua'
    },

    Child3Text: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'greenyellow'
    },
});

export default BoxScreen;