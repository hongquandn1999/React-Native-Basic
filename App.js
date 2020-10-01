import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
	const [character, setCharacter] = useState('')
	const [anime, setAnime] = useState([])
	const nameInputed = (enteredName) => {
		setCharacter(enteredName);
	}

	const onPressName = () => {
		setAnime(currentValue => [...currentValue, character]);
	}
	return (
		<View style={styles.screen}>
			<View style={styles.viewItems}>

				<TextInput placeholder="Input name here" style={styles.inputContainer} onChangeText={nameInputed} />
				<Button title="ADD" onPress={onPressName} />

			</View>
			<FlatList data={anime} renderItem={itemData => (
				<View style={styles.listItem} key={itemData}><Text >{itemData.item}</Text></View>
			)} />


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
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
})


