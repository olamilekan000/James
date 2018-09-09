const IAS11texts = require('./IAS11texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS11") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.overview,
					  "quickReplies": [
					    "Objective of IAS 11",
					    "construction contract",
					    "Disclosure of IAS 11",
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
					            "textToSpeech": `${IAS11texts.overview} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 11"
			        		},
			        		{
			        			"title": "construction contract"
			        		},
			        		{
			        			"title": "Disclosure of IAS 11"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - Objective") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.Objective,
					  "quickReplies": [
					    "IAS 11",
					    "Disclosure of IAS 11",
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
					            "textToSpeech": `${IAS11texts.Objective} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 11"
			        		},
			        		{
			        			"title": "Disclosure of IAS 11"
			        		}
				       	]
			    	}
				}	
			}			
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - construction contract") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.constructionContract,
					  "quickReplies": [
					    "Objective of IAS 11",
					    "Presentation of IAS 11",
					    "Disclosure of IAS 11",
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
					            "textToSpeech": `${IAS11texts.constructionContract} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 11"
			        		},
			        		{
			        			"title": "Disclosure of IAS 11"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - included in contract revenue and costs") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.included_in_contract_revenue_and_costs,
					  "quickReplies": [
					    "IAS 11",
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
					            "textToSpeech": `${IAS11texts.included_in_contract_revenue_and_costs}. \n What do you want to hear next?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 11"
			        		},
			        		{
			        			"title": "construction contract"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS11 - Accounting") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.Accounting,
					  "quickReplies": [
					    "IAS 11",
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
					            "textToSpeech": `${IAS11texts.Accounting} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 11"
			        		},
			        		{
			        			"title": "construction contract"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.Disclosure,
					  "quickReplies": [
					    "IAS 11",
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
					            "textToSpeech": `${IAS11texts.Disclosure} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 11"
			        		}
				       	]
			    	}
				}	
			}			
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - Presentation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.presentation,
					  "quickReplies": [
					    "IAS 11",
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
					            "textToSpeech": `${IAS11texts.presentation} \n What other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 11"
			        		},
			        		{
			        			"title": "Disclosure of IAS 11"
			        		}
				       	]
			    	}
				}	
			}			
		});		
	}									
}