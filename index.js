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
				"fulfillmentMessages": [
					{
						"messages": [
						  {
						    "platform": "facebook",
						    "replies": [
						      "Quick reply 1",
						      "Quick reply 2",
						      "Quick reply 3"
						    ],
						    "title": "Quick Reply Title",
						    "type": 2
						  }
						]
					}
			    ]
		})
	}
});



// {
//   "payload": {
//     "google": {
//       "expectUserResponse": true,
//       "richResponse": {
//         "items": [
//           {
//             "simpleResponse": {
//               "textToSpeech": "Choose a item"
//             }
//           }
//         ]
//       },
//       "systemIntent": {
//         "intent": "actions.intent.OPTION",
//         "data": {
//           "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
//           "listSelect": {
//             "title": "Hello",
//             "items": [
//               {
//                 "optionInfo": {
//                   "key": "first title key"
//                 },
//                 "description": "first description",
//                 "image": {
//                   "url": "/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
//                   "accessibilityText": "first alt"
//                 },
//                 "title": "first title"
//               },
//               {
//                 "optionInfo": {
//                   "key": "second"
//                 },
//                 "description": "second description",
//                 "image": {
//                   "url": "https://lh3.googleusercontent.com/Nu3a6F80WfixUqf_ec_vgXy_c0-0r4VLJRXjVFF_X_CIilEu8B9fT35qyTEj_PEsKw",
//                   "accessibilityText": "second alt"
//                 },
//                 "title": "second title"
//               }
//             ]
//           }
//         }
//       }
//     }
//   }
// }


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

//function which connects to the weather api.
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








    // "fulfillmentMessages": [
    //   {
    //     "text": {
    //       "text": [
    //         "hey"
    //       ]
    //     }
    //   },
    //   {
    //     "payload": {
    //       "messages": [
    //         {
    //           "type": 2,
    //           "platform": "facebook",
    //           "replies": [
    //             "Tell me about ifrs1",
    //             "what is the weather in Lagos"
    //           ],
    //           "title": "Quick Reply Title"
    //         }
    //       ]
    //     }
    //   }
    // ]\



    // {
			 //  "payload": {
			 //    "google": {
			 //      "expectUserResponse": true,
			 //      "richResponse": {
			 //        "items": [
			 //          {
			 //            "simpleResponse": {
			 //              "textToSpeech": "this is a simple response"
			 //            }
			 //          }
			 //        ]
			 //      }
			 //    }
			 //  }
			// }