import React from 'react';
import { ChatFeed, ChatBubbleProps } from 'react-chat-ui';
import Bubble from './../template/Bubble';
import ChatInput from './../template/ChatInput';
import { Subscribe } from 'unstated'
import MessageContainer from '../../state/containers/MessageContainer'

export default class MainChat extends React.Component {

	render() {
		return (
			<Subscribe to={[MessageContainer]}>
				{mc => (
					<div>
						<ChatFeed
							messages={mc.getMessages()} // Boolean: list of message objects
							isTyping={mc.isTyping()} // Boolean: is the recipient typing
							hasInputField={false} // Boolean: use our input, or use your own
							showSenderName // show the name of the user who sent the message
							bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
							// JSON: Custom bubble styles
							bubbleStyles={{
								text: {
									fontSize: 30
								},
								chatbubble: {
									borderRadius: 70,
									padding: 40
								}
							}}
						/>
						<ChatInput/>
					</div>
				)}
			</Subscribe>
		);
	}
}