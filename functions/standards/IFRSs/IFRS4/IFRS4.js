const texts = require('./IFRS4texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IFRS 4") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",
					    "Disclosures of IFRS 4",
					    "IFRS 4 remeasuring Insurance Liability",	    
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
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "Scope of IFRS 4"
			        		},
			        		{
			        			"title": "Insurance Contract"
			        		},
			        		{
			        			"title": "Disclosures of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 remeasuring Insurance Liability"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - Scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "About IFRS 4",
					    "Insurance Contract",	    
					    "Home 🏠"					]
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
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "Insurance Contract"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - insurance Contract") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.insuranceContract,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",
					    "Disclosures of IFRS 4",	    
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
					            "textToSpeech": texts.insuranceContract,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 Accounting Policies"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - Accounting Policies") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.AccountingPolicies,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",
					    "Disclosures of IFRS 4",	    
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
					            "textToSpeech": texts.AccountingPolicies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 insurance Contract"
			        		},
			        		{
			        			"title": "IFRS 4 Changes In Accounting Policies"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - Changes In Accounting Policies") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ChangesInAccountingPolicies,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",
					    "Disclosures of IFRS 4",	    
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
					            "textToSpeech": texts.ChangesInAccountingPolicies,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 insurance Contract"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - remeasuring Insurance Liab") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.remeasuringInsuranceLiab,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",
					    "Disclosures of IFRS 4",	    
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
					            "textToSpeech": texts.remeasuringInsuranceLiab,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 insurance Contract"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - Prudence") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Prudence,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",
					    "Disclosures of IFRS 4",	    
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
					            "textToSpeech": texts.Prudence,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 insurance Contract"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - Future Investment Margins") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.FutureInvestmentMargins,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",
					    "Disclosures of IFRS 4",	    
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
					            "textToSpeech": texts.FutureInvestmentMargins,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 insurance Contract"
			        		}				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - Asset Classifications") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.AssetClassifications,
					  "quickReplies": [
					    "Background of IFRS 4",
					    "Scope of IFRS 4",
					    "Insurance Contract",	    
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
					            "textToSpeech": texts.AssetClassifications,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home 🏠"
			        		},
			        		{
			        			"title": "IFRS 4"
			        		},
			        		{
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "IFRS 4 insurance Contract"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IFRS 4 - Disclosures") {
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
			        			"title": "Background of IFRS 4"
			        		},
			        		{
			        			"title": "Scope of IFRS 4"
			        		},
			        		{
			        			"title": "Insurance Contract"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}										
}