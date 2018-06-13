'use strict';

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const ifrsWebHook = require('./standards/ifrs1');

//utility
const getTheWeather = require('./utility/getWeather');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/webhook', (req, res) => {


	getTheWeather(req, res);

	ifrsWebHook(req, res);


});

//renders web demo
app.get('/', (req, res) => {
	res.render('index');
});

const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});

