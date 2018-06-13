'use strict';

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const texts = require('./texts');

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


const richResponseV2Card = {
  'title': 'Title: this is a title',
  'subtitle': 'This is an subtitle.  Text can include unicode characters including emoji 📱.',
  'imageUri': 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  'buttons': [
    {
      'text': 'This is a button',
      'postback': 'https://assistant.google.com/'
    }
  ]
};



app.get('/', (req, res) => {
	res.render('index');
});

// app.get('*', (req, res) => {
// 	res.render('not');
// });

const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
	// console.log(texts.ifrsHistory);
});

// originalDetectIntentRequest

	// "imageUri": "https://www.secto.fi/wp-content/uploads/IFRS-2-480x320.jpg",
	
	// "postback": "https://www.iasplus.com/en/standards/ifrs/ifrs1"
