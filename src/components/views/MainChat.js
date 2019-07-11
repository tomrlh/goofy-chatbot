import React from 'react';
import { BubbleGroup, ChatFeed } from 'react-chat-ui';
import ChatInput from './../template/ChatInput';
import { Subscribe } from 'unstated'
import MessageContainer from '../../state/containers/MessageContainer'

export default class MainChat extends React.Component {

	render() {
		return (
			<Subscribe to={[MessageContainer]}>
				{mc => (
					<div>
						<BubbleGroup
							messages={mc.state.introMessage}
							id={1}
						/>
						<ChatFeed
							messages={mc.getMessages()}
							isTyping={mc.isTyping()}
							hasInputField={false}
							showSenderName
							bubblesCentered={false}
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