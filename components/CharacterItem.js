import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const CharacterItem = props => {
    return (
        <TouchableHighlight activeOpacity={0.8} onLongPress={props.onPressed} >
            <View style={styles.listItem}>
                <Text >{props.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default CharacterItem;