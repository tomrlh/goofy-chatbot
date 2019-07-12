import React, { Component } from 'react'
import { getRandomCat, getRandomCatUrl } from '../util/Helpers'

class RandomCatImage extends Component {
	componentDidMount() {
		console.log(getRandomCat())
		console.log(getRandomCatUrl())
	}

	render() {
		return (
			<div>
				<img src={getRandomCatUrl()} style={{maxWidth: '100%', maxHeight: '100%'}} alt="cute kitten"/>
				<p>What a cute :3</p>
			</div>
		)
	}
}
export default RandomCatImage