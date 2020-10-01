
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import CharacterItem from './components/CharacterItem'

export default function App() {
	const [character, setCharacter] = useState('')
	const [anime, setAnime] = useState([])
	const nameInputed = (enteredName) => {
		setCharacter(enteredName);
	}

	const onPressName = () => {
		setAnime(currentValue => [...currentValue, {
			id: Math.random().toString(),
			value: character
		}]);
	}
	return (
		<View style={styles.screen}>
			<View style={styles.viewItems}>

				<TextInput placeholder="Input name here" style={styles.inputContainer} onChangeText={nameInputed} value={character} />
				<Button title="ADD" onPress={onPressName} />

			</View>
			<FlatList keyExtractor={(item, index) => item.id} data={anime} renderItem={itemData => <CharacterItem title={itemData.item.value} />} />


		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	},
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


