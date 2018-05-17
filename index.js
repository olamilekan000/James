'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//routes

app.get('/', (req, res) => {
	res.send('I am a bot');
})

// facebook

app.get('/', (req, res) => {
	const hubChallenge = req.query[`hub.challenge`];
	const hubMode = req.query[`hub.mode`];

	const verifyTokenMatches = (req.query[`hub.verify_token`] === `fess`);

	if(verifyTokenMatches && hubMode){
		res.status(200).send(hubChallenge)
	}else{
		res.status(403).end();
	}
})

app.listen(app.get('port'), () => {
	console.log('listening for requests...')
})