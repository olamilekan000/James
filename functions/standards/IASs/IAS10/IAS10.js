const IAS10texts = require('./IAS10texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS10") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.overview,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
					    "Disclosure of IAS 10",
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
					            "textToSpeech": `${IAS10texts.overview} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 10"
			        		},
			        		{
			        			"title": "Non Adjusting Events"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS10 - Event after the reporting period") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.EventsAfterReporting,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
					    "Disclosure of IAS 10",
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
					            "textToSpeech": `${IAS10texts.EventsAfterReporting} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 10"
			        		},
			        		{
			        			"title": "Disclosure of IAS 10"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS10 - Adjusting event") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.AdjustingEvents,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
					    "Disclosure of IAS 10",
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
					            "textToSpeech": `${IAS10texts.AdjustingEvents} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 10"
			        		},
			        		{
			        			"title": "Disclosure of IAS 10"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS10 - Non-adjusting event") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.NonAdjustingEvents,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
					    "Disclosure of IAS 10",
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
					            "textToSpeech": `${IAS10texts.NonAdjustingEvents} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 10"
			        		},
			        		{
			        			"title": "Adjusting Events"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS10 - Going concern issues arising after end of the reporting period") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.goingConcernIssues,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
					    "Disclosure of IAS 10",
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
					            "textToSpeech": `${IAS10texts.goingConcernIssues} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 10"
			        		},
			        		{
			        			"title": "Adjusting Events"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS10 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.disclosure,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
					    "IAS 10",
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
					            "textToSpeech": `${IAS10texts.disclosure} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 10"
			        		},
			        		{
			        			"title": "Non Adjusting Events"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}								
}

