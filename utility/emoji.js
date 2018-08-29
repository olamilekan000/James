const request = require('request');

module.exports = (req, res) => {
	if(req.body.queryResult.intent.displayName === "emoji"){
		res.json({
			"fulfillmentMessages": [
			      {
			        "text": {
			          "text": [
			            "👌"
			          ]
			        }
			      }
			    ],
				  "payload": {
				    "google": {
				      "expectUserResponse": true,
				      "richResponse": {
				        "items": [
				          {
				            "simpleResponse": {
				              "textToSpeech":"👌",
				            }
				          }
				        ]
				     }
				}	
			}					    		
			})
	}
}


// 👌👍
