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
	}else if(req.body.queryResult.parameters["geo-city"]){
		let state = req.body.queryResult.parameters["geo-city"];
		getState(state).then(() => {
			res.json({
				"fulfillmentMessages": [{
					"text":{
						"text": [description]
					}
				}]
			})
		});		
	}else if(req.body.queryResult.parameters["geo-country"]){
		let state = req.body.queryResult.parameters["geo-country"];
		getState(state).then(() => {
			res.json({
				"fulfillmentMessages": [{
					"text":{
						"text": [description]
					}
				}]
			})
		});			
	}else if (req.body.queryResult.parameters["history-of-ifrs"]) {
		let history = req.body.queryResult.parameters["history-of-ifrs"];
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
	}else if (req.body.queryResult.parameters["IFRS1"]) {
			res.json({
				"fulfillmentMessages": [
					{
						"card": {
							"title": "IFRS 1",
							"subtitle": "IFRS 1 First-time Adoption of International Financial Reporting Standards sets out the procedures that an entity must follow when it adopts IFRSs for the first time as the basis for preparing its general purpose financial statements. The IFRS grants limited exemptions from the general requirement to comply with each IFRS effective at the end of its first IFRS reporting period.",
							"imageUri": "https://www.secto.fi/wp-content/uploads/IFRS-2-480x320.jpg",
							"buttons": [
							    {
										     	
								  	"text": "Objective of IFRS 1",
								  	"postback": "Objective"
								 },
								 {
								 	"text": "Measurement OF IFRS 1",
								  	"postback": "Measurement"
								 },
								 {
								 	"text": "Disclosure of IFRS 1",
								  	"postback": "Disclosure"
								 }
							  ]
							}

					}
				]
			})
	}

});

// {
//     'platform': 'ACTIONS_ON_GOOGLE',
//     'basic_card': {
//       'title': 'Title: this is a title',
//       'subtitle': 'This is an subtitle.',
//       'formatted_text': 'Body text can include unicode characters including emoji 📱.',
//       'image': {
//         'image_uri': 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png'
//       },
//       'buttons': [
//         {
//           'title': 'This is a button',
//           'open_uri_action': {
//             'uri': 'https://assistant.google.com/'
//           }
//         }
//       ]
//     }
//   }

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