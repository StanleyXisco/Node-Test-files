const express = require('express');
const fs = require('fs');


const app = express();
app.use(express.static(__dirname + '/public'))

fs.readFile('./hello.txt', (err, data) => {
	if(err) {
		console.log('erroooooooor');
	} 
	console.log('Async', data.toString());
})

// Append
// fs.appendFile('./hello.txt', ' Just incase you dont see it coming', err =>{
// 	if (err){
// 		console.log('I told you to follow procedure');
// 	}
// })


// //Write
// fs.writeFile('bye.txt', ' Oh okay Boss, let see as this whole things go', err => {
// 	if (err) {
// 		console.log('common young man what the fuck is wrong with you')
// 	}
// })

// Delete
fs.unlink('./bye.txt', err=>{
	console.log('Nawa oh this men get mind oh');
})


app.listen(3000);