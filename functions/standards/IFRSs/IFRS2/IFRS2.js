const texts = require('./IFRS2textt')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IFRS 2") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Share Based Payment",	    
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
					            "textToSpeech": texts.overview,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Share Based Payment"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 2 - Share Based Payment") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.shareBasedPayment,
					  "quickReplies": [
					    "IFRS 2",	    
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
					            "textToSpeech": texts.shareBasedPayment,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 2 - Scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope,
					  "quickReplies": [
					    "share Based Payment",	    
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
					            "textToSpeech": texts.Scope,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 2 - Recognition and measurement") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recogAndMeas,
					  "quickReplies": [
					    "IFRS 2",	    
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
					            "textToSpeech": texts.recogAndMeas,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 2 - Measurement And Guidance") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.MeasurementGuidance,
					  "quickReplies": [
					    "IFRS 2",	    
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
					            "textToSpeech": texts.MeasurementGuidance,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 2 - Modifications, cancellations, and settlements") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ModificationsCancellationsSettlements,
					  "quickReplies": [
					    "IFRS 2",	    
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
					            "textToSpeech": texts.ModificationsCancellationsSettlements,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 2 - Disclosure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IFRS 2",	    
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
					            "textToSpeech": texts.Disclosure,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 2"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}						
}