'use strict';

const express = require('express');
// const functions = require('firebase-functions'); // Cloud Functions for Firebase library
const request = require('request');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const app = express();

app.set('view engine', 'ejs');
// exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
// 	console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
// 	if (request.body.result) {
//     	processV1Request(request, response);
//   	} else if (request.body.queryResult) {
//    		processV2Request(request, response);
//   	} else {
//     	console.log('Invalid Request');
//     	return response.status(400).end('Invalid Webhook Request (expecting v1 or v2 webhook request)');
//   	}
// });
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
			console.log(description);
		});
	});
}

/*
* Function to handle v2 webhook requests from Dialogflow
curl -H "Content-Type: application/json; charset=utf-8"  -H "Authorization: Bearer ya29.c.ElrSBTHJJtnDObML39uGpbF1SVv4ts8jGP4svPjHKWQ5TOqbVHW0JQ5NqNXiDFqzK8RALwIukp65gqg-k77EE19W30Kyx5hnkgq4qtM574pBdX1vQlP3n9mpSo4"  -d "{\"queryInput\":{\"text\":{\"text\":\"ifrs1\",\"languageCode\":\"en\"}},\"queryParams\":{\"timeZone\":\"Africa/Lagos\"}}" "https://dialogflow.googleapis.com/v2/projects/ifrs-bot/agent/sessions/d9202e1b-ea0f-29ec-966b-ce3a68e48b22:detectIntent"
*/


// const processV2Request = (request, response) => {
	// // An action is a strirng used to identify what needs to be done in fulfillment
	// let action = request.body.queryResult.action; //? request.body.queryResult.action : 'default';//
	// // Parameters are any entites that Dialogflow has extracted from the request.
	// let parameters = request.body.queryResult.queryText;
	// // Parameters are any entites that Dialogflow has extracted from the request.
	// let qText = request.body.queryResult.parameters || {};
	// // Contexts are objects used to track and store conversation state
	// let inputContexts = request.body.queryResult.contexts;
	// // Get the request source (Google Assistant, Slack, API, etc)
	// let requestSource = (request.body.originalDetectIntentRequest) ? request.body.originalDetectIntentRequest.source : undefined;
	// // Get the session ID to differentiate calls from different users
	// let session = (request.body.session) ? request.body.session : undefined;
	// // Create handlers for Dialogflow actions as well as a 'default' handler
// 	let qText = 'Lagos';
// 	const actionHandlers = {

// 		'input.getWeather': () => {
// 			const apiKey = '1545ad0038b38ead324bfab9e11bb464';
// 			const url = `http://api.openweathermap.org/data/2.5/weather?q=${qText}&appid=${apiKey}`;
// 			request(url, (err, response, body) => {
// 				if(err) console.log(err)

// 				const wether = JSON.parse(body)
// 				console.log(body);
// 				res.send(body);
// 			})
// 		}
// 	}

// }



// function processV2Request (request, response) {
// 	  // An action is a string used to identify what needs to be done in fulfillment
//   let action = (request.body.queryResult.action) ? request.body.queryResult.action : 'default';
//   // Parameters are any entites that Dialogflow has extracted from the request.
//   let parameters = request.body.queryResult.parameters || {}; // https://dialogflow.com/docs/actions-and-parameters
//   // Contexts are objects used to track and store conversation state
//   let inputContexts = request.body.queryResult.contexts; // https://dialogflow.com/docs/contexts
//   // Get the request source (Google Assistant, Slack, API, etc)
//   let requestSource = (request.body.originalDetectIntentRequest) ? request.body.originalDetectIntentRequest.source : undefined;
//   // Get the session ID to differentiate calls from different users
//   let session = (request.body.session) ? request.body.session : undefined;
//   // Create handlers for Dialogflow actions as well as a 'default' handler
//   const actionHandlers = {

//       // The default fallback intent has been matched, try to recover (https://dialogflow.com/docs/intents#fallback_intents)
//     'input.unknown': () => {
//       // Use the Actions on Google lib to respond to Google requests; for other requests use JSON
//       sendResponse('I didn\'t get that one! -hb'); // Send simple response to user
//     },
//     // Default handler for unknown or undefined actions
//     'default': () => {
//       let responseToUser = {
//         //fulfillmentMessages: richResponsesV2, // Optional, uncomment to enable
//         //outputContexts: [{ 'name': `${session}/contexts/weather`, 'lifespanCount': 2, 'parameters': {'city': 'Rome'} }], // Optional, uncomment to enable
//         fulfillmentText: 'Sorry! I can\'t do that ... YET! -hb' // displayed response
//       };
//       sendResponse(responseToUser);
//     },

//     // The default fallback intent has been matched, try to recover (https://dialogflow.com/docs/intents#fallback_intents)
//     'input.choosevideo': () => {

//         const API_KEY = '';
//         var res = {};
//         var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict&maxResults=5&videoSyndicated=true&videoEmbeddable=true&q=howCode&type=video&key=" + API_KEY;
//         req(url, function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 var obj = JSON.parse(body);
//                 var items = obj.items;

//                 var r = {
//                   "fulfillmentMessages": [
//                       {
//                         "platform": "FACEBOOK",
//                         "card": {
//                           "title": items[0].snippet.title,
//                           "subtitle": items[0].snippet.description,
//                           "imageUri": items[0].snippet.thumbnails.default.url,
//                           "buttons": [
//                             {
//                               "text": "Watch video",
//                               "postback": 'https://www.youtube.com/watch?v=' + items[0].id.videoId
//                             }
//                           ]
//                         }
//                       },
//                   ]
//                 }

//                 if (request.body.originalDetectIntentRequest.payload.source == "twitter") {
//                     sendResponse("Here's an awesome video! " + "https://www.youtube.com/watch?v=" + items[randVidId].id.videoId + " -hb");
//                 } else {
//                     sendResponse(r); // Send simple response to user
//                 }

//             }});
//     }
//   }
//   // If undefined or unknown action use the default handler
//   if (!actionHandlers[action]) {
//     action = 'default';
//   }
//   // Run the proper handler function to handle the request from Dialogflow
//   actionHandlers[action]();
//   // Function to send correctly formatted responses to Dialogflow which are then sent to the user
//   function sendResponse (responseToUser) {
//     // if the response is a string send it as a response to the user
//     if (typeof responseToUser === 'string') {
//       let responseJson = {fulfillmentText: responseToUser}; // displayed response
//       response.json(responseJson); // Send response to Dialogflow
//     } else {
//       // If the response to the user includes rich responses or contexts send them to Dialogflow
//       let responseJson = {};
//       // Define the text response
//       responseJson.fulfillmentText = responseToUser.fulfillmentText;
//       // Optional: add rich messages for integrations (https://dialogflow.com/docs/rich-messages)
//       if (responseToUser.fulfillmentMessages) {
//         responseJson.fulfillmentMessages = responseToUser.fulfillmentMessages;
//       }
//       // Optional: add contexts (https://dialogflow.com/docs/contexts)
//       if (responseToUser.outputContexts) {
//         responseJson.outputContexts = responseToUser.outputContexts;
//       }
//       // Send the response to Dialogflow
//       console.log('Response to Dialogflow: ' + JSON.stringify(responseJson));
//       response.json(responseJson);
//     }
//   }


// }



// const richResponseV2Card = {
//   'title': 'Title: this is a title',
//   'subtitle': 'This is an subtitle.  Text can include unicode characters including emoji 📱.',
//   'imageUri': 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
//   'buttons': [
//     {
//       'text': 'This is a button',
//       'postback': 'https://assistant.google.com/'
//     }
//   ]
// };
// const richResponsesV2 = [
//   {
//     'platform': 'ACTIONS_ON_GOOGLE',
//     'simple_responses': {
//       'simple_responses': [
//         {
//           'text_to_speech': 'Spoken simple response',
//           'display_text': 'Displayed simple response'
//         }
//       ]
//     }
//   },
//   {
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
//   },
//   {
//     'platform': 'FACEBOOK',
//     'card': richResponseV2Card
//   },
//   {
//     'platform': 'SLACK',
//     'card': richResponseV2Card
//   }
// ];

app.get('/', (req, res) => {
	res.render('index');
});

const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});