import React from 'react';
import { Subscribe } from 'unstated'
import MessageContainer from '../../state/containers/MessageContainer'

export default class ChatInput extends React.Component {
	state = {
		message: ''
	}

	styles = {
		chatInput: {
			flex: 1,
		},
		inputStyle: {
			border: 'none',
			borderTopWidth: '1',
			borderTopStyle: 'solid',
			borderTopColor: '#ddd',
			fontSize: 30,
			outline: 'none',
			padding: '30',
			width: '100%',
		},
	};

	render() {

		return (
			<Subscribe to={[MessageContainer]}>
				{mc => (
					<div className="chat-input" style={this.styles.chatInput}>
						<input 
							type="text" 
							style={this.styles.inputStyle} 
							placeholder={"type your message.."}
							value={this.state.message}
							onChange={(event) => {
								this.setState({message: event.target.value})
							}}
						/>
						<button onClick={() => {
							if(this.state.message)
								mc.userAddMessage(this.state.message)
						}}>Submit</button>
					</div>
				)}
			</Subscribe>
		);
	}
}