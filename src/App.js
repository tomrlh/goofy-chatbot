import React from 'react';
import './App.css';
import SimpleChatBot from './components/views/SimpleChatBot'

function App() {

	let styles = {
		list: {
			display: 'inline',
			listStyleType: 'none',
			paddingRight: '20px'
		}
	}

	return (
		<div className="App">
			<h3>A simple chat bot demonstration</h3>

			<SimpleChatBot/>

			<br/>

			<h4>Javascript stack used</h4>

			<ul id="navlist" style={styles.list}>
				<li><a href="https://github.com/facebook/react">react</a></li>
				<li><a href="https://github.com/LucasBassetti/react-simple-chatbot">simple-chat-bot</a></li>
				<li><a href="https://github.com/moment/moment">moment</a></li>
				<li><a href="https://github.com/axios/axios">axios</a></li>
			</ul>
		</div>
	);
}

export default App;
