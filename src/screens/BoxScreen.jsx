import React from "react";
import { Text,View,StyleSheet, ScrollView } from "react-native";

const BoxScreen = () => {
    return (
        <ScrollView>
            <Text style={styles.titleStyle}>Box Object Model:</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.bomText}>
                    margin\border\padding\CONTENT
                </Text>
            </View>

            <Text style={styles.titleStyle}>Flex Box:</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parentStyle --> alignItems: 'stretch' (default)</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{alignItems: 'flex-start'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parentStyle --> alignItems: 'flex-start'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{alignItems: 'center'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parentStyle --> alignItems: 'center'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{alignItems: 'flex-end'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parentStyle --> alignItems: 'flex-end'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{flexDirection: 'column'}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parentStyle --> flexDirection: 'column'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>

            <View style={[{flexDirection: 'row', height: 100}, styles.viewStyle]}>
                <Text style={styles.Child1Text}>Child #1</Text>
                <Text style={styles.Child2Text}>in parentStyle --> flexDirection: 'row'</Text>
                <Text style={styles.Child3Text}>Child #3</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
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