import axios from 'axios'
import moment from 'moment'
import { signs } from './SignDates'

export const sleep = (delay) => {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}

export const calculateFibonacci = (number) => {
	if(parseInt(number, 10) >= 1) {
		let counter = 0
		let previous = 0
		let next = 1
		var values = []
		values.push(previous)
		values.push(next)

		while(counter < number-2) {
			values.push((values[values.length-1] + values[values.length-2]))
			counter += 1
		}
		return values.toString()
	}
}

export const isValidDate = (date) => {
	let regex = /^\d{2}[./-]\d{2}$/
	let dateFormat = 'MM-DD';
	let dateFormatted = moment(date).format(dateFormat)

	if(date.match(regex) && moment(dateFormatted,dateFormat,true).isValid())
		return true
	else
		return false
}

export const findSign = (date) => {
	let wasMatched = signs.find(sign => moment(date).isBetween(sign.start, sign.end))
	if(wasMatched)
		return wasMatched.name.toUpperCase()
	else
		return 'sign not found'
}

export const getRandomCat = () => {
	axios.get('https://api.thecatapi.com/v1/images/search')
	.then(response => {
		window.localStorage.setItem('catUrl', JSON.stringify(response.data[0].url))
	})
	.catch(error => {console.log(error)})
}

export const getRandomCatUrl = () => {
	let catUrl = JSON.parse(window.localStorage.getItem('catUrl'))
	return catUrl ? catUrl : null
}

export const getRandomJoke = () => {
	axios.get('https://official-joke-api.appspot.com/random_joke')
	.then(response => {
		window.localStorage.setItem('joke', JSON.stringify(response.data))
		sleep(2000)
	})
}

export const getJokeSetup = () => {
	let joke = JSON.parse(window.localStorage.getItem('joke'))
	return joke ? joke.setup : null
}

export const getJokePunchline = () => {
	let joke = JSON.parse(window.localStorage.getItem('joke'))
	return joke ? joke.punchline : null
}
