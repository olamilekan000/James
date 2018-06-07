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
				"fulfillmentText": "This is a text response",
				"fulfillmentMessages": [{
					"text":{
						"text": [texts.ifrsHistory]
					}
					// "card": {
				 //    	"title": "card title",
				 //    	"subtitle": "card text",
				 //    	"imageUri": "https://petersfancybrownhats.com/company_image.png",
				 //    	"buttons": [
					//         {
					//           "text": "button text",
					//           "postback": "https://assistant.google.com/"
					//         }
				 //      	]
			  //   	}				
				}],
				"messages": [

					{
					    "buttons": [
					      {
					        "postback": "https://petersfancybrownhats.com/company_image.png",
					        "text": "Card Link Title"
					      }
					    ],
					    "imageUrl": "http://urltoimage.com",
					    "platform": "facebook",
					    "subtitle": "Card Subtitle",
					    "title": "Card Title",
					    "type": 1
					}
				]
				// "payload": {
				//   "google": {
				//     "expectUserResponse": true,
				//     "richResponse": {
				//       "items": [
				//         {
				//           "simpleResponse": {
				//             "textToSpeech": "this is a simple response"
				//           }
				//         }
				//       ]
				//     }
				//   },
				//   "facebook": {
				//     "text": "Hello, Facebook! I did it"
				//   },
				//   "slack": {
				//     "text": "This is a text response for Slack."
				//   }
				// }
			})
	}else{
		res.json({	
				"fulfillmentMessages": [{
					"text":{
						"text": ["I didn't get your message!"]
					}
				}]
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