import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Button } from 'react-native'
const CharacterInput = props => {
    const [character, setCharacter] = useState('');
    const nameInputed = (enteredName) => {
        setCharacter(enteredName);
    }
    return (
        <View style={styles.viewItems}>

            <TextInput
                placeholder="Input name here"
                style={styles.inputContainer}
                onChangeText={nameInputed}
                value={character} />
            <Button title="ADD" onPress={props.onAddAnime.bind(this, character)} />

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    viewItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        height: 100
    },
})

export default CharacterInput;