const texts = require('./IFRS8texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IFRS 8") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Scope of IFRS 8",	    
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
			        			"title": "Scope of IFRS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 8 - Scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope,
					  "quickReplies": [
					    "IFRS 8",	    
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
			        			"title": "IFRS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 8 - Operating Segments") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.OperatingSegments,
					  "quickReplies": [
					    "IFRS 8",	    
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
					            "textToSpeech": texts.OperatingSegments,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 8 - Reportable Segment") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ReportableSegment,
					  "quickReplies": [
					    "IFRS 8",	    
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
					            "textToSpeech": texts.ReportableSegment,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 8 - Disclosure Requirement") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.DisclosureRequirement,
					  "quickReplies": [
					    "IFRS 8",	    
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
					            "textToSpeech": texts.DisclosureRequirement,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}				
}