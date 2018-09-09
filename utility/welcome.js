const axios = require('axios');

module.exports = (req, res) => {
	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": `Hi! I am Fra Luca, let's talk about IFRS!! 😃. \n Click on any of the buttons below to begin a conversation`,

					  "quickReplies": [
					    "The History of IFRS",
					    "Conceptul Framework",
					    "IAS",
					    "IFRS"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":`Hi! I am Fra Luca, let's talk about IFRS!! 😃`
					        	}
				        	}],
				        "suggestions":[
							{
							  "title": "IAS 1"
							},
							{
							  "title": "IAS 2"
							},
							{
							  "title": "IAS 8"
							},
							{
							  "title": "IAS 16"
							},
							{
							  "title": "IAS 11"
							}								
				        ]	
			    	}
				}
			}					
		})
	}
}


