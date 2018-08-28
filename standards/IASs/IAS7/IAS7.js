const texts = require('./ias7Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS7") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective",
					    "measurement",
					    "Home 🏠"
					]
				}
			}],
			  "payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":texts.overview,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS7 - Objective") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					  	"IAS7",
					    "Home 🏠"
					]
				}
			}],
			  "payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":texts.obj,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS7 - Presentation of the Statement of Cash Flows") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.presentation,
					  "quickReplies": [
						"IAS7",
					    "Home 🏠"
					]
				}
			}],
			  "payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":texts.presentation,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
}


