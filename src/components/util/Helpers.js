export const sleep = (delay) => {
	var start = new Date().getTime();
	while (new Date().getTime() < start + delay);
}

export const isAValidMessage = (messageText) => {
	if(messageText === '1' || messageText === '2' || messageText === '3' ||
		messageText === '4' || messageText === '5')
		return true
	else 
		return false
}

export const presentationMessage = (option) => {
	let presentationMessage = null
	switch(option) {
		case '1':
			presentationMessage = 'Insert a integer number'
			break
		case '2':
			presentationMessage = 'Insert your birth date in this format: YYYY-MM-dd'
			break
		case '3':
			presentationMessage = 'Insert your full name'
			break
		case '4':
			presentationMessage = 'Joke'
			break
		case '5':
			presentationMessage = 'Riddle'
			break
		default:
			presentationMessage = 'Invalid option.'
			break
	}
	return presentationMessage
}

export const giveAnswer = (option) => {
	let answer = null
	switch(option) {
		case '1':
			answer = calculateFibonacci(option)
			break
		case '2':
			answer = 'Sign'
			break
		case '3':
			answer = 'Name'
			break
		case '4':
			answer = 'Joke'
			break
		case '5':
			answer = 'Riddle'
			break
		default:
			answer = 'Invalid option.'
			break
	}
	return answer
}


export const calculateFibonacci = (number) => {
	number = '10'
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
		return values
	}
}