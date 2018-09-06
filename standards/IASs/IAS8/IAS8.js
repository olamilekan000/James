const IAS8texts = require('./IAS8texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS8") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.overview,
					  "quickReplies": [
					    "Accounting Policies",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Consistency of accounting policies",					    
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
					            "textToSpeech": IAS8texts.overview,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Accounting policies"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Accounting policies") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.acctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Consistency of accounting policies",					    
					    "Changes of Accounting Policies",
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
					            "textToSpeech": IAS8texts.acctngPolicies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Materiality") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.materiality,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Consistency of accounting policies",					    
					    "Changes of Accounting Policies",
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
					            "textToSpeech": IAS8texts.materiality,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}						
	if (req.body.queryResult.intent.displayName === "IAS8 - Selection and application of accounting policies") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.selectionOfplocies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Consistency of accounting policies",
					    "Changes of Accounting Policies",
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
					            "textToSpeech": IAS8texts.selectionOfplocies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS8 - Consistency of accounting policies") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.consistencyOfPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
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
					            "textToSpeech": IAS8texts.consistencyOfPolicies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS8 - Changes in accounting policies") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.changesOfAcctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
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
					            "textToSpeech": IAS8texts.changesOfAcctngPolicies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - retrospective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.retrospective,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Disclosing Accounting Estimates",
					    "Changes of Accounting Policies",
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
					            "textToSpeech": IAS8texts.retrospective,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosures relating to changes in accounting policy") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.discRelatedToANewStndAcctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Disclosures relating to voluntary changes in accounting policy",
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
					            "textToSpeech": IAS8texts.discRelatedToANewStndAcctngPolicies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosures relating to voluntary changes in accounting policy") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.discRelatedToVoluntaryAcctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Disclosing Accounting Estimates",
					    "Disclosures relating to changes in accounting policy",
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
					            "textToSpeech": IAS8texts.discRelatedToVoluntaryAcctngPolicies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosing Accounting Estimates") {//change in accounting estimate, effect of a change in an accounting estimate
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.chngOfAcctEstm,
					  "quickReplies": [
					    "IAS8",
					    "Disclosures relating to changes in accounting policy",
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
					            "textToSpeech": IAS8texts.chngOfAcctEstm,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Errors") {
		return res.json({
			"fulfillmentMessages": [
				{
					"text": {
				        "text": [
				    	    IAS8texts.Errors
				        ]
				    }
				}
			],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech": IAS8texts.Errors,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 8"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}											
}