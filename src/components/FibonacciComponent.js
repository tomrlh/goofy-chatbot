import React from 'react'
import { justCalculateFibonacci } from './util/Helpers'

export const fibonacciComponent = (props) => {
	const { steps } = props;
	const fibonacciInput = steps.fibonacciInput.value

	return (
		<div>
			the input was {fibonacciInput},
			<br/>
			the relative Fibonacci Sequence is: {justCalculateFibonacci(fibonacciInput)}
		</div>
	)
}