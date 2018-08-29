const IAS10texts = require('./IAS10texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS10") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.overview,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
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
	if (req.body.queryResult.intent.displayName === "IAS10 - Event after the reporting period") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.EventsAfterReporting,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
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
			              "textToSpeech":texts.EventsAfterReporting,
			            }
			          }
			        ]
			     }
			}	
		}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS10 - Adjusting event") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.AdjustingEvents,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
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
			              "textToSpeech":texts.AdjustingEvents,
			            }
			          }
			        ]
			     }
			}	
		}
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS10 - Non-adjusting event") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.NonAdjustingEvents,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
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
			              "textToSpeech":texts.NonAdjustingEvents,
			            }
			          }
			        ]
			     }
			}	
		}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS10 - Going concern issues arising after end of the reporting period") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.goingConcernIssues,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
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
			              "textToSpeech":texts.goingConcernIssues,
			            }
			          }
			        ]
			     }
			}	
		}
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS10 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS10texts.disclosure,
					  "quickReplies": [
					    "Adjusting Events",
					    "Non Adjusting Events",
					    "IAS 10",
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

