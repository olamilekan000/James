const texts = require('./IAS27texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 27") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 27",
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
	if (req.body.queryResult.intent.displayName === "IAS 27 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "Objective of IAS 27",
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
	if (req.body.queryResult.intent.displayName === "IAS 27 - Consolidated FS") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ConsolidatedFS,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.ConsolidatedFS,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Separate FS") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.SeparateFS,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.SeparateFS,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Requirement for separate financial statements") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.reqForSepFS,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.reqForSepFS,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Requirement for separate financial statements") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.choiceOfacctMethod,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.choiceOfacctMethod,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Investment entities") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.investmentEntities,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.investmentEntities,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Recognition of dividends") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recogOfDivdend,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.recogOfDivdend,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Group reorganisations") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.groupReorganisation,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.groupReorganisation,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Disclosure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "Objective of IAS 27",
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
	if (req.body.queryResult.intent.displayName === "IAS 27 - Applicability and early adoption") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Applicability,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.Applicability,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 27 - Separate financial statements") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.AccountingInvInanAss,
					  "quickReplies": [
					    "Objective of IAS 27",
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
				            "textToSpeech":texts.AccountingInvInanAss,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}												
}