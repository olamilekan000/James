const IAS8texts = require('./IAS8texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS8") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.overview,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Accounting policies") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.acctngPolicies,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Materiality") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.materiality,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}						
	if (req.body.queryResult.intent.displayName === "IAS8 - Selection and application of accounting policies") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.selectionOfplocies,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS8 - Consistency of accounting policies") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.consistencyOfPolicies,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS8 - Changes in accounting policies") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.changesOfAcctngPolicies,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - retrospective") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.retrospective,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosures relating to changes in accounting policy") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.discRelatedToANewStndAcctngPolicies,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosures relating to voluntary changes in accounting policy") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.discRelatedToVoluntaryAcctngPolicies,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosing Accounting Estimates") {//change in accounting estimate, effect of a change in an accounting estimate
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.chngOfAcctEstm,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Errors") {
		res.json({
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
				       "items": [
				        {
				         "simpleResponse": {
				          "textToSpeech":IAS8texts.Errors,
				          }
				        }
				    ]
				  }
				}	
			}
		});		
	}											
}