import React, { Component } from 'react'
import { getRandomCat, sleep } from './util/Helpers'
import sp from 'synchronized-promise'

class RandomKittenComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			result: '',
			trigger: false,
			catUrl: '',
		};

		this.triggetNext = this.triggetNext.bind(this);
	}

	triggetNext() {
		this.setState({ trigger: true }, () => {
			this.props.triggerNextStep();
		});
	}

	async getNewCat () {
		this.setState({ loading: true })
		var url = await getRandomCat()
		console.log('URL ', url)
		this.setState({ catUrl: url, loading: false })
	}

	componentWillMount() {
		this.getNewCat()
	}

	render() {
		return (
			<div className="dbpedia">
				<div>
					{this.state.loading &&
						<p>loading....</p>
					}
					<img src={this.state.catUrl} style={{maxWidth: '100%', maxHeight: '100%'}} alt="cute kitten"/>
					<button onClick={() => this.getNewCat()}>
						see other :3
					</button>
					<button onClick={() => this.triggetNext()}>
						finish
					</button>
				</div>
			</div>
		);
	}
}
export default RandomKittenComponent