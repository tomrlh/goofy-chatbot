import React from 'react'

export const techStackComponent = (props) => {
	return (
		<div>
			I was built up with the following Javascript stack:
			<ul>
				<li>for main structure was <a href="https://reactjs.org/">React.js</a></li>
				<li>UI components was with <a href="https://lucasbassetti.com.br/react-simple-chatbot/">Simple Chat Bot</a></li>
				<li>for handling dates to <i>Find Sign</i> was <a href="https://momentjs.com/">momentjs</a></li>
				<li>to consume some API's I use <a href="https://github.com/axios/axios">axios</a></li>
				<li>I fetch jokes from <a href="https://official-joke-api.appspot.com/random_joke">Random Jokes</a></li>
				<li>and the cute kittens from <a href="https://thecatapi.com/">Cat API</a></li>
			</ul>
		</div>
	)
}