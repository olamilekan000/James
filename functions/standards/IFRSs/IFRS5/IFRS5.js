const texts = require('./IFRS5texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IFRS 5") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Background",	    
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
			        			"title": "Background"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 5 - Held-for-sale classification") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.HeldForSale,
					  "quickReplies": [
					    "Background",	    
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
					            "textToSpeech": texts.HeldForSale,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 5"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 5 - Held for distribution to owners classification") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.heldToDistri,
					  "quickReplies": [
					    "Background",	    
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
					            "textToSpeech": texts.heldToDistri,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 5"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 5 - disposal Group") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disposalGroup,
					  "quickReplies": [
					    "Background",	    
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
					            "textToSpeech": texts.disposalGroup,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 5"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 5 - Measurement") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Measurement,
					  "quickReplies": [
					    "Background",	    
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
					            "textToSpeech": texts.Measurement,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 5"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 5 - Presentation") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Presentation,
					  "quickReplies": [
					    "Background",	    
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
					            "textToSpeech": texts.Presentation,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 5"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}						
	if (req.body.queryResult.intent.displayName === "IFRS 5 - Disclosures") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosures,
					  "quickReplies": [
					    "Background",	    
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
					            "textToSpeech": texts.Disclosures,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 5"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 5 - ClassificationAsDiscl") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ClassificationAsDiscl,
					  "quickReplies": [
					    "Background",	    
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
					            "textToSpeech": texts.ClassificationAsDiscl,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 5"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}		
}