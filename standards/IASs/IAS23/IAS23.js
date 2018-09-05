const texts = require('./IAS23texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 23") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
				"google":{
				    "conversationToken": "",
				    "expectUserResponse": true,
				    "expectedInputs": [
				        {
				            "inputPrompt": {
				                "richInitialPrompt": {
				                    "items": [
				                        {
				                            "simpleResponse": {
				                                "textToSpeech": "Howdy! I can tell you fun facts about almost any number, like 42. What do you have in mind?",
				                                "displayText": "Howdy! I can tell you fun facts about almost any number. What do you have in mind?"
				                            }
				                        }
				                    ],
				                    "suggestions": []
				                }
				            },
				            "possibleIntents": []
				        }
				    ]
				}
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 23 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [{
				        "simpleResponse": {
				            "textToSpeech":texts.obj,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 23 - Components of Borrowing Costs") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.borrowingCostComponents,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [{
				        "simpleResponse": {
				            "textToSpeech":texts.borrowingCostComponents,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 23 - qualifying asset") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.qualifyingAsset,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [{
				        "simpleResponse": {
				            "textToSpeech":texts.qualifyingAsset,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 23 - Scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.scope,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [{
				        "simpleResponse": {
				            "textToSpeech":texts.scope,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 23 - Recognition") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recognision,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [{
				        "simpleResponse": {
				            "textToSpeech":texts.recognision,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 23 - Measurement") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Measurement,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [{
				        "simpleResponse": {
				            "textToSpeech":texts.Measurement,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 23 - Disclosure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "Objective of IAS 23",
					    "Home 🏠"
					]
				}
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [{
				        "simpleResponse": {
				            "textToSpeech":texts.Disclosure,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}									
}