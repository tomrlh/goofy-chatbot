import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import RandomCatImage from '../template/RandomCatImage'
import { fibonacciComponent as FibonacciComponent } from '../FibonacciComponent'
import { justCalculateFibonacci,calculateFibonacci, showFibonacciAnswer, findSign, isValidDate, getRandomJoke, getJokeSetup, getJokePunchline } from '../util/Helpers'

class SimpleChatBot extends Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		let styles = {
		    float: 'none',
		    margin: '0 auto'
		}

		return (
			<div>
				<ChatBot
					style={styles}
					headerTitle="Goofy Chatbot"
					botAvatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4Q7TL8gZll_6fwz4AmyGGRN7P3yloo1vNPbDCCPIR8KADAhQ"}
					steps={[
						{
							id: '1',
							message: "Hi, I'm the Goofy ChatBot, able to answer a few questions... please select one of the following:",
							trigger: 'options',
						},
						{
							id: 'options',
							options: [
								{ value: 'fibonacci', label: '1) Fibonacci sequence', trigger: 'beginFibonacci' },
								{ value: 'findSign', label: '2) Find your sign', trigger: 'beginFindSign' },
								{ value: 'joke', label: '3) Tell a joke', trigger: 'beginJoke' },
								{ value: 'female', label: '4) See a kitten', trigger: 'beginCatImage' },
							],
						},
						{
							id: 'beginFibonacci',
							message: 'fibonacci, ok, please insert a number..',
							trigger: 'fibonacciInput'
						},
						{
							id: 'beginFindSign',
							message: 'let me know your birthdate month and day..',
							trigger: 'findSignInput'
						},
						{
							id: 'beginJoke',
							message: ({ previousValue, steps }) => {
								getRandomJoke()
								return 'let me think...'
							},
							trigger: 'showJokeSetup'
						},
						{
							id: 'beginCatImage',
							message: "so let's see a cute kitten XD",
							trigger: 'showKitten'
						},


						// --------- FIBONACCI LOGIC ----------------
						{
							id: 'fibonacciInput',
							user: true,
							validator: (value) => {
								if (isNaN(value))
									return 'value must be a number'
								else if (value < 0)
									return 'value must be positive'
								return true;
							},
							trigger: 'calculateFibonacci'
						},
						{
							id: 'calculateFibonacci',
							component: <FibonacciComponent />,
							trigger: 'finishedOption'
						},
						{
							id: 'showFibonacciAnswer',
							component: (
								<div>
									<p style={{
    									maxWidth:'200px',
    									wordWrap: 'breakWord'
									}}>
										{showFibonacciAnswer()}
									</p>
								</div>
							),
							trigger: 'finishedOption'
						},
						// ------------------------------------------


						// --------- FIND SIGN LOGIC ----------------
						{
							id: 'findSignInput',
							user: true,
							validator: (value) => {
								if (!isValidDate(value))
									return 'date format must be: MM/DD'
								return true
							},
							trigger: 'findSign'
						},
						{
							id: 'findSign',
							message: ({ previousValue, steps }) => {
								return 'Your sign based in your birth date is ' + findSign(previousValue)
							},
							trigger: 'finishedOption'
						},
						// ------------------------------------------

						// ------------ TELL JOKE LOGIC -------------
						{
							id: 'showJokeSetup',
							message: ({ previousValue, steps }) => {
								return getJokeSetup()
							},
							trigger: 'getAnswer'
						},
						{
							id: 'getAnswer',
							options: [
								{ value: 'view answer', label: 'show me the answer..', trigger: 'showJokePunchline' },
							],
						},
						{
							id: 'showJokePunchline',
							message: ({ previousValue, steps }) => {
								return getJokePunchline()
							},
							trigger: 'finishedOption'
						},
						// ------------------------------------------

						// ---------- SHOW KITTEN LOGIC -------------
						{
							id: 'beginCatImage',
							component: <RandomCatImage/>,
							trigger: 'finishedOption'
						},
						// ------------------------------------------


						{
							id: 'finishedOption',
							message: 'Do you want to try other option?',
							trigger: 'rerun',
						},
						{
							id: 'rerun',
							options: [
								{ value: 'yes', label: 'Yes', trigger: 'options' },
								{ value: 'no', label: 'No', trigger: 'finish' },
							],
						},
						{
							id: 'finish',
							message: 'Thank you for iteracting with me :D',
							end: true
						},

					]}
				/>
			</div>
		);
	}
}

export default SimpleChatBot;