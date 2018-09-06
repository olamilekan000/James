const IAS12texts = require('./IAS12Texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS12") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.overview,
					  "quickReplies": [
					    "Objective of IAS12",
					    "Presentation",
					    "Disclosure",
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
					            "textToSpeech":IAS12texts.overview,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - Objective") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.objective,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.objective,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - Key definitions") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.keyTerms,
					  "quickReplies": [
				    	"IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.keyTerms,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}			
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS12 - Current tax") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.currentTax,
					  "quickReplies": [
				    	"IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.currentTax,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - Calculation of deferred taxes") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.calOfDeferredTaxes,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.calOfDeferredTaxes,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS12 - Tax bases") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.TaxBases,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.TaxBases,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - exceptions to the requirement to recognise a deferred tax liability") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.exceptionsTOrecogOfDefTaxLiab,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.exceptionsTOrecogOfDefTaxLiab,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS12 - Recognition of deferred tax assets") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.recogOfDefTaxAssets,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.recogOfDefTaxAssets,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - Measurement of deferred tax") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.measureOfDefTaxAssets,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.measureOfDefTaxAssets,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS12 - guidance on measuring deferred taxes") {
		res.json({
			"fulfillmentMessages": [
				{
					"text": {
				        "text": [
				    	    IAS12texts.guidance_on_measuring_deferred_taxes
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
					            "textToSpeech":IAS12texts.guidance_on_measuring_deferred_taxes,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - Amount of income tax to recognise") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.recogOfTaxAmt,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.recogOfTaxAmt,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - Where to recognise income tax for the period") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.whereToRecogIncomeTax,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.whereToRecogIncomeTax,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}			
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - presentation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS12texts.presentation,
					  "quickReplies": [
					    "IAS 12",
					    "Tax Base",
					    "Deferred tax asset",
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
					            "textToSpeech":IAS12texts.presentation,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS12 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"text": {
				        "text": [
				    	    IAS12texts.Disclosure
				        ]
				    }
			}],
			"payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
				        "items": [{
					        "simpleResponse": {
					            "textToSpeech":IAS12texts.Disclosure,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 12"
			        		}
				       	]
			    	}
				}	
			}		
		});		
	}																	
}
