'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const http = require('http');
require('dotenv').config();

//STANDARD LIST MODULE
const wholeStandards = require('./standards/allStandards'); //IFRS 1 - 9
const allStandardsIFRSCont = require('./standards/allStndardsIfrsContd'); //IFRS 10 - 17
const allStandardsIAS = require('./standards/allStandardsIas'); //IAS 1 - 17
const allStandardsIAScont = require('./standards/allStandardsIas2'); //IAS 20 - 30
const allStandardsIAScont2 = require('./standards/allStandardsIas3'); //IAS 31 - 39
const allStandardsIAScont3 = require('./standards/allStandardsIas4'); //IAS 40 - 41

//WEBHOOKS FOR EACH STANDARDS MODULE
const ifrs1WebHook = require('./standards/ifrs1');

//UTILITY MODULE
const getTheWeather = require('./utility/getWeather');
const welcome = require('./utility/welcome');
const emoji = require('./utility/emoji');

const app = express();

//set view engine to EJS
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Description to be sent from weather webhook
var description = {}

app.post('/webhook', (req, res) => {

	//utilities
	welcome(req, res); //fires the weather webhook.
	getTheWeather(req, res, description); //fires the weather webhook.
	emoji(req, res);
	//others
	ifrs1WebHook(req, res); //fires the IFRS 1 webhook.
	wholeStandards(req, res); //fires the All standards webhook (IFRS).
	allStandardsIFRSCont(req, res); //fires the remaining IFRS standards webhook.
	allStandardsIAS(req, res); //fires IAS standards webhook.
	allStandardsIAScont(req, res); //fires the remaining IAS standards webhook.
	allStandardsIAScont2(req, res); //fires the remaining IAS standards webhook.
	allStandardsIAScont3(req, res); //fires the remaining IAS standards webhook.


});

//renders web demo
app.get('/', (req, res) => {
	res.render('index');
});

//keeps heroku app awake
// setInterval(function() {
//     http.get("http://ifrshook.herokuapp.com/");
// }, 900000) // every 15 minutes (900000)


const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});

