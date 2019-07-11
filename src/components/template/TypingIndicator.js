import React, { Component } from 'react'
class TypingIndicator extends Component {
	render() {
		if (this.props.isTyping) {
			console.log('IS TYPING')
			return (
				<div>
					{`typing...`}
				</div>
			)
		}
		return <div />
	}
}
export default TypingIndicator