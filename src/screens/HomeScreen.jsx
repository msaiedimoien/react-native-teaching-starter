import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>here is my buttons!</Text>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Components Demo'
                    onPress={() => navigation.navigate('Components')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: '10%'
    },

    text: {
        fontSize: 20,
        color: 'green',
        padding: 5
    },

    button: {
        borderRadius: 0,
        margin: 5
    }
});

export default HomeScreen;