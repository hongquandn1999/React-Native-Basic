import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={{ padding: 50 }}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100, height: 100 }}>

				<TextInput placeholder="Input name here" style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} />
				<Button title="ADD" />

			</View>
		</View>
	);
}


