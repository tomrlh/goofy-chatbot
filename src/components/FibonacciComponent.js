import React from 'react'
import { calculateFibonacci } from './util/Helpers'

export const fibonacciComponent = (props) => {
	const { steps } = props;
	const fibonacciInput = steps.fibonacciInput.value

	return (
		<div>
			the input was {fibonacciInput},
			<br/>
			the relative Fibonacci Sequence is:
			<br/>
			<p style={{
				maxWidth:'200px',
				wordWrap: 'breakWord'
			}}>
				{calculateFibonacci(fibonacciInput)}
			</p>
		</div>
	)
}