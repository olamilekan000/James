const texts = require('./IAS16texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 16") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Overview,
					  "quickReplies": [
					    "Objective of ias 16",
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
					            "textToSpeech": `${texts.Overview} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Objective of IAS 16") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj_IAS_16,
					  "quickReplies": [
					    "IAS 16",
					    "Scope of IAS 16",
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
					            "textToSpeech": `${texts.obj_IAS_16} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		},
			        		{
			        			"title": "Scope of IAS 16"
			        		}
				       	]
			    	}
				}	
			}

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Scope") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope_ias16,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.Scope_ias16} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recognition,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.recognition} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Initial measurement") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ini_msrmnt,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.ini_msrmnt} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Measurement subsequent to initial recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.measOfSubsequent,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.measOfSubsequent} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - The revaluation model") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.revModel,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.revModel} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Depreciation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Depreciation,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.Depreciation} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}	
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Recoverability of the carrying amount") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recovOfCarryingAmt,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.recovOfCarryingAmt} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Derecognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Derecognition,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.Derecognition} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.Disclosure} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Revalued property, plant and equipment") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.PPEatRevAmt,
					  "quickReplies": [
					    "IAS 16",
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
					            "textToSpeech": `${texts.PPEatRevAmt} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 16"
			        		}
				       	]
			    	}
				}	
			}
		})
	}																	
}