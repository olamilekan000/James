const texts = require('./ias2Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS2") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective",
					    "disclosure",
					    "Scope",
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
	if (req.body.queryResult.intent.displayName === "IAS2 - Objective of IAS 2") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 2",
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
			              "textToSpeech":texts.obj,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - scope") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope,
					  "quickReplies": [
					    "IAS 2",
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
			              "textToSpeech":texts.Scope,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - measurement") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.measurement,
					  "quickReplies": [
					    "IAS 2",
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
			              "textToSpeech":texts.measurement,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - NRV") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.NRV,
					  "quickReplies": [
					    "IAS 2",
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
			              "textToSpeech":texts.NRV,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - Expense recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Expense_recognition,
					  "quickReplies": [
					    "IAS 2",
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
			              "textToSpeech":texts.Expense_recognition,
			            }
			          }
			        ]
			     }
			}	
		}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS2 - disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disclosure,
					  "quickReplies": [
					    "IAS 2",
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
			              "textToSpeech":texts.disclosure,
			            }
			          }
			        ]
			     }
			}	
		}	
		});
	}
	
}
