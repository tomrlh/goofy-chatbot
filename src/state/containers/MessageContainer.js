import { Container } from 'unstated'
import { Message } from 'react-chat-ui'

class MessageContainer extends Container {
	state = {
		messages: [
			new Message({
				id: 1,
				message: "I'm the recipient! (The person you're talking to)",
			}), // Gray bubble
			new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
		],
		isTyping: false
	}

	addMessage = (newMessage) => {
		newMessage = new Message({ id: 1, message: newMessage })
		this.setState(state => {
			let newMessages = state.messages
			newMessages.push(newMessage)
			return { messages: newMessages }
		});
	}



	getMessages = () => {
		return this.state.messages
	}



	isTyping = () => {
		return this.state.isTyping
	}
}

export default MessageContainer