import { Container } from 'unstated'
import { Message } from 'react-chat-ui'
import { sleep, isAValidMessage, presentationMessage, giveAnswer } from '../../components/util/Helpers'

class MessageContainer extends Container {
	state = {
		introMessage: [
			new Message({
				id: 1,
				message: "Hi! I'm a simple chat-bot that answer a few questions."
			}),
			new Message({
				id: 1,
				message: "please select one of the following:"
			}),
			new Message({
				id: 1,
				message: "1) Fibonacci sequence"
			}),
			new Message({
				id: 1,
				message: "2) Find your sign"
			}),
			new Message({
				id: 1,
				message: "3) Find your name"
			}),
			new Message({
				id: 1,
				message: "4) Tell a joke"
			}),
			new Message({
				id: 1,
				message: "5) A riddle"
			})
		],
		messages: [],
		isTyping: false
	}

	userAddMessage = (messageText) => {
		if(isAValidMessage(messageText)) {
			this.setState(state => {
				let newMessages = state.messages
				newMessages.push(new Message({id: 0, message: messageText}))
				return { messages: newMessages }
			})
			let presentationMessage = presentationMessage(messageText)
			this.botAddMessage(presentationMessage)
		}
		else
			this.botAddMessage("Please insert a valid message.")
	}



	botAddMessage = (messageText) => {
		this.setState(state => {
			let newMessages = state.messages
			newMessages.push(new Message({id: 1, message: messageText}))
			return { messages: newMessages }
		})
	}



	setIsTyping = () => {
		this.setState({ isTyping: true })
		sleep(1000)
		this.setState({ isTyping: false })
	}







	getMessages = () => {
		return this.state.messages
	}
	isTyping = () => {
		return this.state.isTyping
	}
}

export default MessageContainer