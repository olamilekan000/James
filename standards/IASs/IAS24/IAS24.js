const texts = require('./IAS24texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 24") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 24",
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
					            "textToSpeech": `${texts.overview} \n What do you want to listen next?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 24"
			        		},
			        		{
			        			"title": "IAS 24 Disclosures"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 24 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 24",
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
					            "textToSpeech": `${texts.obj} \n what other standard do you want to know more about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 24"
			        		},
			        		{
			        			"title": "who are related parties?"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 24 - who are related parties") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.whoAreRelatedParties,
					  "quickReplies": [
					    "IAS 24",
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
					            "textToSpeech":`${texts.whoAreRelatedParties} \n what other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 24"
			        		},
			        		{
			        			"title": "IAS 24"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 24 - not related parties") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.notRelated,
					  "quickReplies": [
					    "IAS 24",
					    "who are related parties?",
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
					            "textToSpeech": `${texts.notRelated} \n what other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 24"
			        		},
			        		{
			        			"title": "who are related parties?"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 24 - related party transaction") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.relatedPartyTransact,
					  "quickReplies": [
					    "IAS 24",
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
					            "textToSpeech":`${texts.relatedPartyTransact} \n what other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 24"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 24 - disclosures") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disclosures,
					  "quickReplies": [
					    "IAS 24",
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
					            "textToSpeech":`${texts.disclosures} \n what other standard do you want to know about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 24"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 24 - Examples of the kinds of transactions that are disclosed if they are with a related party") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.examples,
					  "quickReplies": [
					    "IAS 24",
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
					            "textToSpeech":`${texts.examples} \n what other standard do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 24"
			        		}
				       	]
			    	}
				}	
			}
		})
	}							
}