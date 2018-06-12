'use strict';

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const { WebhookClient } = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const texts = require('./texts');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var description = {}

app.post('/webhook', (req, res) => {


	if(req.body.queryResult.intent.displayName === "getTheWeather"){

		let state;

		if (req.body.queryResult.parameters["states"]) {

			state = req.body.queryResult.parameters["states"];

		}
		if (req.body.queryResult.parameters["geo-city"]) {

			state = req.body.queryResult.parameters["geo-city"];

		}
		if(req.body.queryResult.parameters["geo-country"]) {

			state = req.body.queryResult.parameters["geo-country"];
		}

		//fires get state function
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

	if (req.body.queryResult.intent.displayName === "History of IFRS") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": "A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
					  "quickReplies": [
					    "ifrs 1"
					  ]
				}
			}]
		})
	}else if (req.body.queryResult.intent.displayName === "IFRS1") {
			res.json({
				"fulfillmentMessages": [
					{
						"quickReplies": {
							"title": "IFRS 1 First-time Adoption of International Financial Reporting Standards sets out the procedures that an entity must follow when it adopts IFRSs for the first time as the basis for preparing its general purpose financial statements. The IFRS grants limited exemptions from the general requirement to comply with each IFRS effective at the end of its first IFRS reporting period. A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							"quickReplies": [
								"Objective of IFRS 1",
								"measurement of IFRS 1",
								"Disclosure of IFRS 1",
								"Read more about IFRS 1"
							]
						}

					}
				]
			})

	}else if (req.body.queryResult.intent.displayName === "IFRS1 - objective") {
				res.json({
					"fulfillmentMessages": [{
						"quickReplies": {
							  "title": "A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							  "quickReplies": [
							    "measurement of IFRS 1",
							    "Disclosure of IFRS 1",
							    "Read more about IFRS 1"
							  ]
						}
				}]
			})
	}else if (req.body.queryResult.intent.displayName === "IFRS1 - measurement") {
		res.json({
			"fulfillmentMessages": [
				{
					"quickReplies": {
							  "title": "A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							  "quickReplies": [
							    "Objective of IFRS 1",
							    "Disclosure of IFRS 1",
							    "Read more about IFRS 1"
							  ]
					}
				}
			]
		})
	}else if (req.body.queryResult.intent.displayName === "IFRS1 - disclosure") {
		res.json({
			"fulfillmentMessages": [
				{
					"quickReplies": {
							  "title": "A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							  "quickReplies": [
							    "Objective of IFRS 1",
							    "measurement of IFRS 1",
							    "Read more about IFRS 1"
							  ]
					}
				}
			]
		})
	}else if (req.body.queryResult.intent.displayName === "IFRS1 - Read more") {
		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IFRS 1",
						"subtitle": "IFRS 1 First-time Adoption of International Financial Reporting Standards sets out the procedures that an entity must follow when it adopts IFRSs for the first time as the basis for preparing its general purpose financial statements.",
						"imageUri": "https://www.secto.fi/wp-content/uploads/IFRS-2-480x320.jpg",
						"buttons":[
							{
								'text': 'Read more...',
      							'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs1'
							}
						]
					}
				}
			]
		})
	}

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

var getState = (state) => {
	return new Promise((resolve, reject) => {
		const apiKey = '1545ad0038b38ead324bfab9e11bb464';
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

		request(url, (err, response, body) => {
			if(err) console.log(err)

			let wether = JSON.parse(body)
			if (wether.cod == 200 ) {
				description = "it's " + wether.weather[0].description + " in " + wether.name;
				resolve(description);
			}else if(wether.cod == 400 ){
				description = "city not found";
				resolve(description);
			}
		});
	});
}


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
