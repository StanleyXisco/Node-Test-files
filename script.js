const fs = require('fs');

stanley = () =>{
	fs.readFile('./santa.txt', (error, data)=>{
		console.time('Time Machine');
		const directions = data.toString();
		const directionsArrays = directions.split('');
		const answer = directionsArrays.reduce( (acc, currentValue) => {
			if ( currentValue === '(') {
				return acc += 1;
			} else if (currentValue === ')') {
				return acc	-= 1;
			}
		}, 0)
		console.timeEnd('Time Machine');
		console.log('Santa\'s Floor', answer);
	});
}

// stanley();


// When does stanta enter the basement

chidera = () => {
	fs.readFile('./santa.txt', (error, data) =>  {
		console.time('start Time: ');
		const directions = data.toString();
		const directionsArrays = directions.split('');
		let acc = 0;
		let counter = 0;
		const answer = directionsArrays.some((currentValue) =>{
			if (currentValue === '('){
				acc += 1;
			} else if (currentValue === ')'){
				acc -= 1;
			}
			counter ++ ;
			return acc < 0;
		})
		console.timeEnd('start Time: ');
		console.log('Santa entered the basement at floor', counter);
	})
}

chidera();