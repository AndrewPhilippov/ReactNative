import React                                          from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'

const ComponentsScreen = () => {
	const myName = 'Andrew'
	const greeting = <Text>My name is </Text>
	return (
		<View>
			<Text style={ styles.textStyle }>This is the ComponentsScreen</Text>
			<Text style={ styles.nameStyle }>2d Line of the Text { myName }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
									 textStyle: {
										 fontSize: 45,
									 },
									 nameStyle: {
										 fontSize: 25,
									 },
								 })

export default ComponentsScreen
