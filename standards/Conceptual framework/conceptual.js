const texts = require('./conceptualText')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "Assets") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Assets,
					  "quickReplies": [
					    "Liability",
					    "Elements of Financial statements",
					    "Equity",
					    "Recognition",
					    "Expenses",	    
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
					            "textToSpeech": texts.Assets,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Liability"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Equity"
			        		},
			        		{
			        			"title": "Expenses"
			        		},
			        		{
			        			"title": "Recognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "Liability") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.liab,
					  "quickReplies": [
					    "Assets",
					    "Elements of Financial statements",
					    "Equity",
					    "Recognition",
					    "Expenses",	    
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
					            "textToSpeech": texts.liab,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Assets"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Equity"
			        		},
			        		{
			        			"title": "Expenses"
			        		},
			        		{
			        			"title": "Recognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "Equity") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.equity,
					  "quickReplies": [
					    "Assets",
					    "Elements of Financial statements",
					    "Liability",
					    "Recognition",
					    "Expenses",	    
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
					            "textToSpeech": texts.equity,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Assets"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Liability"
			        		},
			        		{
			        			"title": "Expenses"
			        		},
			        		{
			        			"title": "Recognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "Income") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.income,
					  "quickReplies": [
					    "Assets",
					    "Elements of Financial statements",
					    "Liability",
					    "Recognition",
					    "Expenses",	    
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
					            "textToSpeech": texts.income,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Assets"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Liability"
			        		},
			        		{
			        			"title": "Expenses"
			        		},
			        		{
			        			"title": "Recognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "Expenses") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Expenses,
					  "quickReplies": [
					    "Assets",
					    "Elements of Financial statements",
					    "Liability",
					    "Recognition",
					    "Equity",	    
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
					            "textToSpeech": texts.Expenses,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Assets"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Liability"
			        		},
			        		{
			        			"title": "Equity"
			        		},
			        		{
			        			"title": "Recognition"
			        		},
			        		{
			        			"title": "Derecognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "Recognition") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recognition,
					  "quickReplies": [
					    "Assets",
					    "Elements of Financial statements",
					    "Liability",
					    "Expenses",
					    "Equity",
					    "Derecognition",	    
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
					            "textToSpeech": texts.recognition,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Assets"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Liability"
			        		},
			        		{
			        			"title": "Equity"
			        		},
			        		{
			        			"title": "Expenses"
			        		},
			        		{
			        			"title": "Derecognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "Derecognition") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Derecognition,
					  "quickReplies": [
					    "Assets",
					    "Elements of Financial statements",
					    "Liability",
					    "Expenses",
					    "Equity",
					    "Recognition",	    
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
					            "textToSpeech": texts.Derecognition,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Assets"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Liability"
			        		},
			        		{
			        			"title": "Equity"
			        		},
			        		{
			        			"title": "Expenses"
			        		},
			        		{
			        			"title": "Recognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "Reporting Entity") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.reporting_entity,
					  "quickReplies": [
					    "Assets",
					    "Elements of Financial statements",
					    "Liability",
					    "Expenses",
					    "Equity",
					    "Recognition",	    
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
					            "textToSpeech": texts.reporting_entity,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "Assets"
			        		},
			        		{
			        			"title": "Elements of Financial statements"
			        		},
			        		{
			        			"title": "Liability"
			        		},
			        		{
			        			"title": "Equity"
			        		},
			        		{
			        			"title": "Expenses"
			        		},
			        		{
			        			"title": "Recognition"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}									
}