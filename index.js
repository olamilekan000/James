'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
require('dotenv').config();

//STANDARDS LIST
const wholeStandards = require('./standards/allStandards'); //IFRS 1 - 9
const allStandardsIFRSCont = require('./standards/allStndardsIfrsContd'); //IFRS 10 - 17
const allStandardsIAS = require('./standards/allStandardsIas'); //IAS 1 - 17
const allStandardsIAScont = require('./standards/allStandardsIas2'); //IAS 20 - 30

//WEBHOOKS FOR EACH STANDARDS
const ifrs1WebHook = require('./standards/ifrs1');

//utility
const getTheWeather = require('./utility/getWeather');

const app = express();

//set view engine to EJS
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var description = {}

app.post('/webhook', (req, res) => {

	//fires the fuction for the weather webhook
	getTheWeather(req, res, description);
	//fires the fuction for the IFRS 1 webhook
	ifrs1WebHook(req, res);
	//fires the fuction for the All standards webhook (IFRS).
	wholeStandards(req, res);
	//fires the fuction for the remaining IFRS standards
	allStandardsIFRSCont(req, res);
	//fires the fuction for the remaining IAS standards
	allStandardsIAS(req, res);

});

//renders web demo
app.get('/', (req, res) => {
	res.render('index');
});

const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});

