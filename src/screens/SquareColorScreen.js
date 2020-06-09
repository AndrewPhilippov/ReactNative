import React, { useState }                from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ColorCounter }                   from '../components/ColorCounter'

const SquareColorScreen = () => {
	const [red, setRed] = useState(0)
	const [green, setGreen] = useState(0)
	const [blue, setBlue] = useState(0)

	return (
		<View>
			<ColorCounter
				onIncrease={() => setRed(red + 1)}
				onDecrease={() => setRed(red - 1)}
				color='Red'
			/>
			<ColorCounter color='Green' />
			<ColorCounter color='Blue' />
			<View style={ { height: 100, width: 100, backgroundColor: 'rgb(255,0,0)' } }></View>
		</View>
	)
}

const styles = StyleSheet.create({})

export { SquareColorScreen }
