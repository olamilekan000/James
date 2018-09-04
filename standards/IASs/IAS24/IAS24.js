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
				            "textToSpeech":texts.overview,
				        	}
			        	}]
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
				            "textToSpeech":texts.obj,
				        	}
			        	}]
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
				            "textToSpeech":texts.whoAreRelatedParties,
				        	}
			        	}]
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
				            "textToSpeech":texts.notRelated,
				        	}
			        	}]
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
				            "textToSpeech":texts.relatedPartyTransact,
				        	}
			        	}]
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
				            "textToSpeech":texts.relatedPartyTransact,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 24 - related party disclosures") {
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
				            "textToSpeech":texts.disclosures,
				        	}
			        	}]
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
				            "textToSpeech":texts.examples,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}							
}