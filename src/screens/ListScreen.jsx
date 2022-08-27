import React from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: '32'},
        {name: 'Friend 2', age: '27'},
        {name: 'Friend 3', age: '15'},
        {name: 'Friend 4', age: '21'},
        {name: 'Friend 5', age: '34'},
        {name: 'Friend 6', age: '55'},
        {name: 'Friend 7', age: '22'},
        {name: 'Friend 8', age: '6'},
        {name: 'Friend 9', age: '76'},
        {name: 'Friend 10', age: '11'},
        {name: 'Friend 11', age: '23'},
        {name: 'Friend 12', age: '65'},
        {name: 'Friend 13', age: '34'},
        {name: 'Friend 14', age: '4'},
        {name: 'Friend 15', age: '86'},
        {name: 'Friend 16', age: '66'},
    ]
    return (
        <>
            <Text
                style=
                    {{
                        fontSize: 25,
                        textAlign: 'center',
                        marginTop: 10,
                        backgroundColor: 'aqua',
                        borderRadius: 10,
                        marginHorizontal: '10%',
                        padding: 10
                    }}
            >
                my List...!
            </Text>
            <FlatList
                style={styles.flatList}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.listFriends}>
                            {item.name} - Age {item.age}
                        </Text>
                    )
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    listFriends: {
        textAlign: "center",
        color: 'tomato',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        margin: 5,
        marginHorizontal: '10%',
        padding: 5,
        backgroundColor: 'lightyellow'
    },
    flatList: {
        marginVertical: 20
    }
});

export default ListScreen;