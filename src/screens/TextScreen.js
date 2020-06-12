import React, { useState }                   from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
	const [password, setPassword] = useState('')
	console.log(password)
	return <View>
		<Text>Password:</Text>
		<TextInput
			autoCapitalize='none'
			autoCorrect={ false }
			value={ password }
			onChangeText={ newValue => {
				setPassword(newValue)
			} }
			style={ styles.input } />
		{ password.length > 4 ? <Text>Password length should not be greater than 5 characters</Text> : null }
	</View>
}
const styles = StyleSheet.create({
									 input: {
										 margin: 15,
										 padding: 10,
										 borderColor: 'black',
										 borderWidth: 1,
									 },
								 })
export { TextScreen }
