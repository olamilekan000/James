const IAS11texts = require('./IAS11texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS11") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.overview,
					  "quickReplies": [
					    "Objective",
					    "construction contract",
					    "Disclosure",
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
			              "textToSpeech":texts.overview,
			            }
			          }
			        ]
			     }
			}	
		}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - Objective") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.Objective,
					  "quickReplies": [
					    "IAS 11",
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
			              "textToSpeech":texts.Objective,
			            }
			          }
			        ]
			     }
			}	
		}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - construction contract") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.constructionContract,
					  "quickReplies": [
					    "Objective",
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
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":texts.constructionContract,
			            }
			          }
			        ]
			     }
			}	
		}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - included in contract revenue and costs") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.included_in_contract_revenue_and_costs,
					  "quickReplies": [
					    "IAS 11",
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
			              "textToSpeech":texts.included_in_contract_revenue_and_costs,
			            }
			          }
			        ]
			     }
			}	
		}		
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS11 - Accounting") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.Accounting,
					  "quickReplies": [
					    "IAS 11",
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
			              "textToSpeech":texts.Accounting,
			            }
			          }
			        ]
			     }
			}	
		}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.Disclosure,
					  "quickReplies": [
					    "IAS 11",
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
			              "textToSpeech":texts.Disclosure,
			            }
			          }
			        ]
			     }
			}	
		}		
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS11 - Presentation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS11texts.presentation,
					  "quickReplies": [
					    "IAS 11",
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
			              "textToSpeech":texts.presentation,
			            }
			          }
			        ]
			     }
			}	
		}		
		});		
	}									
}