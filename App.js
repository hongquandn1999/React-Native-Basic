
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import CharacterItem from './components/CharacterItem'
import CharacterInput from './components/CharacterInput'

export default function App() {
	const [character, setCharacter] = useState('')
	const [anime, setAnime] = useState([])


	const onPressName = characterTitle => {
		setAnime(currentValue => [...currentValue, {
			id: Math.random().toString(),
			value: characterTitle
		}]);
	}
	return (
		<View style={styles.screen}>
			<CharacterInput onAddAnime={onPressName} />
			<FlatList keyExtractor={(item, index) => item.id} data={anime} renderItem={itemData => <CharacterItem title={itemData.item.value} onPressed={() => console.log('Press Active')} />} />


		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	},


})


