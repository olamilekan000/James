const texts = require('./ias2Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS2") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 2",
					    "disclosure of IAS 2",
					    "Scope of IAS 2",
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
					            "textToSpeech": `${texts.overview} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - Objective of IAS 2") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 2",
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
					            "textToSpeech": `${texts.obj} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Scope of IAS 2"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - scope") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope,
					  "quickReplies": [
					    "IAS 2",
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
					            "textToSpeech": `${texts.Scope} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - measurement") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.measurement,
					  "quickReplies": [
					    "IAS 2",
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
					            "textToSpeech": `${texts.measurement} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - NRV") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.NRV,
					  "quickReplies": [
					    "IAS 2",
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
					            "textToSpeech": `${texts.NRV} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - Expense recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Expense_recognition,
					  "quickReplies": [
					    "IAS 2",
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
					            "textToSpeech": `${texts.Expense_recognition} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disclosure,
					  "quickReplies": [
					    "IAS 2",
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
					            "textToSpeech": `${texts.disclosure} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
			    	}
				}	
			}
		});
	}
	
}
