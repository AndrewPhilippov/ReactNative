import React                              from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
	return <View>
		<Text style={ styles.text }>Calculator!</Text>
		<Button
			onPress={ () => navigation.navigate('Components') }
			title='Go to Components Demo'
		/>
		<Button
			onPress={ () => navigation.navigate('List') }
			title='Go to List Demo'
		/>
		<Button
			onPress={ () => navigation.navigate('Image') }
			title='Go to Image Screen'
		/>
		<Button
			onPress={ () => navigation.navigate('Counter') }
			title='Go to Counter Demo'
		/>
		<Button
			onPress={ () => navigation.navigate('Color') }
			title='Go to Colors'
		/>
		<Button
			onPress={ () => navigation.navigate('Square') }
			title='Go to Square Colors'
		/>
		<Button
			onPress={ () => navigation.navigate('Text') }
			title='Go to Text Screen'
		/>
		<Button
			onPress={ () => navigation.navigate('Box') }
			title='Go to Box Screen'
		/>
	</View>
}

const styles = StyleSheet.create({
									 text: {
										 fontSize: 20,
									 },
								 })

export default HomeScreen
