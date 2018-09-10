const texts = require('./IAS37texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 37") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 37",
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
			        			"title": "Objective of IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 37",
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
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.scope,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.scope} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - provison") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.provison,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.provison} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - Contingent liability") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ContingentLiability,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.ContingentLiability} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - Contingent asset") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ContingentAsset,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.ContingentAsset} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - Recognition of a provision") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.RecognitionProvision,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.RecognitionProvision} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}	
	if (req.body.queryResult.intent.displayName === "IAS 37 - Measurement of Provisions") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.MeasurementProvisions,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.MeasurementProvisions} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - Remeasurement of Provison") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.RemeasurementProvison,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.RemeasurementProvison} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - Restructuring") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Restructurings,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.Restructurings} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - restructuring Provison") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.restructuringProvison,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.restructuringProvison} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - debit Entry") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.debitEntry,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.debitEntry} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - use provisions") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.useprovisions,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.useprovisions} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 37 - Disclosures") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosures,
					  "quickReplies": [
					    "IAS 37",
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
					            "textToSpeech": `${texts.Disclosures} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 37"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if ( req.body.webhookStatus.message === "Webhook call failed. Error: Request timeout.") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": "I could not process that... I'll get back to you soon",
					  "quickReplies": [
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
					            "textToSpeech": "I could not process that... I'll get back to you soon",
					        	}
				        	}],
				        "suggestions": [
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
	