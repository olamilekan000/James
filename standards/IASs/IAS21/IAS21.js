const texts = require('./IAS21texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 21") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 21",
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
	if (req.body.queryResult.intent.displayName === "IAS 21 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 21",
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
	if (req.body.queryResult.intent.displayName === "IAS 21 - Functional currency") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.functionalCurrency,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.functionalCurrency,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Presentation currency") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.presentCurrency,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.presentCurrency,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Exchange difference") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.exchangeDiff,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.exchangeDiff,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Foreign operation") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.foreignOperation,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.foreignOperation,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Basic steps for translating foreign currency amounts into the functional currency") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.basicStepsofTranslating,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.basicStepsofTranslating,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Foreign currency transactions") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.foreignCurrenctTranslation,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.foreignCurrenctTranslation,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Translation from the functional currency to the presentation currency") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.translationFromTheFunctionalCurrency,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.translationFromTheFunctionalCurrency,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Disposal of a foreign operation") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disposalOfaForeignOperation,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.disposalOfaForeignOperation,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Tax effects of exchange differences") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.taxEffectOfExchnDiff,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.taxEffectOfExchnDiff,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 21 - Disclosure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IAS 21",
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
	if (req.body.queryResult.intent.displayName === "IAS 21 - Convenience translations") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ConvenienceTranslation,
					  "quickReplies": [
					    "IAS 21",
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
				            "textToSpeech":texts.ConvenienceTranslation,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}												
}