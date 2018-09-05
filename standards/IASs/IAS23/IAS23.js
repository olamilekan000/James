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
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":texts.obj,
					        	}
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 23"
			        		}
				       	]
			    	}
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
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "Home"
			        		}
				       	]
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
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "qualifying asset"
			        		}
				       	]
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
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "qualifying asset"
			        		},
			        		{
			        			"title": "Scope of IAS 23"
			        		}
				       	]
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
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "qualifying asset"
			        		}
				       	]
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
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "qualifying asset"
			        		},
			        		{
			        			"title": "Measurement of IAS 23"
			        		}
				       	]
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
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "Home"
			        		}
				       	]
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
				        	}],
				        "suggestions": [
				        	{
				        		"title": "IAS 23"
				        	},
			        		{
			        			"title": "Home"
			        		}
				       	]
			    	}
				}	
			}
		})
	}									
}