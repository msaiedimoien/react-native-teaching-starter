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
            <TouchableOpacity style={styles.button}>
                <Button
                    title='List Demo'
                    onPress={() => navigation.navigate('List')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Image Screen Demo'
                    onPress={() => navigation.navigate('Image')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Counter Screen(State) Demo'
                    onPress={() => navigation.navigate('Counter')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Counter Screen(Reducer) Demo'
                    onPress={() => navigation.navigate('CounterReducer')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Color Screen Demo'
                    onPress={() => navigation.navigate('Color')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Square Screen(State) Demo'
                    onPress={() => navigation.navigate('Square')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Square Screen(Reducer) Demo'
                    onPress={() => navigation.navigate('Reducer')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Button
                    title='Text Screen Demo'
                    onPress={() => navigation.navigate('Text')}
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