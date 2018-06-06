'use strict';

const express = require('express');
const request = require('request');
const { WebhookClient } = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const app = express();

app.set('view engine', 'ejs');

var description = {}

app.post('/webhook', (req, res) => {
	if(req.body.queryResult.parameters["states"]){
		let state = req.body.queryResult.parameters["states"];
		getState(state).then(() => {
			res.json({
				"fulfillmentMessages": [{
					"text":{
						"text": [description]
					}
				}]
			})
		});
	}
	// let state = 'Ogun';
});

var getState = (state) => {
	return new Promise((resolve, reject) => {
		const apiKey = '1545ad0038b38ead324bfab9e11bb464';
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

		request(url, (err, response, body) => {
			if(err) console.log(err)

			let wether = JSON.parse(body)
			description = "it's " + wether.weather[0].description + " in " + wether.name
			resolve(description);
		});
	});
}


app.get('/', (req, res) => {
	res.render('index');
});

app.get('*', (req, res) => {
	res.render('not');
});

const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});