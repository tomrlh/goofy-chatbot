import React from 'react';
import './App.css';
import GoofyChatBot from './components/views/GoofyChatBot'

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

			<GoofyChatBot/>

			<br/>
		</div>
	);
}

export default App;
