import React, { Component } from 'react'
import { getRandomJoke } from './util/Helpers'

class JokeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			result: '',
			trigger: false,
			joke: '',
			seeAnswer: false
		};

		this.triggetNext = this.triggetNext.bind(this);
	}

	triggetNext() {
		this.setState({ trigger: true }, () => {
			this.props.triggerNextStep();
		});
	}

	async getNewJoke() {
		this.setState({ loading: true })
		var joke = await getRandomJoke()
		this.setState({ joke: joke, loading: false })
	}

	componentWillMount() {
		this.getNewJoke()
	}

	render() {
		return (
			<div className="dbpedia">
				<div>
					{this.state.loading &&
						<p>loading....</p>
					}
					
					<p><i><b>{this.state.joke.setup}</b></i></p>
					
					{this.state.seeAnswer &&
						<p><i>{this.state.joke.punchline}</i></p>
					}

					<button onClick={() => {this.setState({seeAnswer: true})}}>
						see answer
					</button>
					<button onClick={() => this.triggetNext()}>
						finish
					</button>
				</div>
			</div>
		);
	}
}
export default JokeComponent