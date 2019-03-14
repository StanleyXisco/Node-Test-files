const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send("Getting Root");
});

app.get('/Profile', (req, res) => {
	res.send("Getting Profile");
});

app.post('/Pro', (req, res) => {
	console.log(req.body);
	// const user = {
	// 	name: 'Stanley Chidera',
	// 	course: 'Information Management Technology',
	// 	POB: 'Abakaliki',
	// 	Profession: 'Software Developer'
	// }
	res.send('success');
});

app.listen(3000);