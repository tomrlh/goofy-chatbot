import React from 'react';
import { ChatBubble, Message } from 'react-chat-ui';

class Bubble extends React.Component {
	render() {
		const message = new Message(0, "Hello World!");
		return (
			<ChatBubble message={message}/>
		)
	}
}

export default Bubble