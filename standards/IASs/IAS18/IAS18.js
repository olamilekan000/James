const texts = require('./IAS18texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 18") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of ias 18",
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

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Objective") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "Objective of ias 18",
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

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Key definition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.keyDef,
					  "quickReplies": [
					    "Objective of ias 18",
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
			              "textToSpeech":texts.keyDef,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Measurement of revenue") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Measurement,
					  "quickReplies": [
					    "Objective of ias 18",
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
			              "textToSpeech":texts.Measurement,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Recognition of revenue") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recog,
					  "quickReplies": [
					    "Objective of ias 18",
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
			              "textToSpeech":texts.recog,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Sale of goods") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recogForSalesofGoods,
					  "quickReplies": [
					    "Objective of ias 18",
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
			              "textToSpeech":texts.recogForSalesofGoods,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Rendering of services") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recogForServices,
					  "quickReplies": [
					    "Objective of ias 18",
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
			              "textToSpeech":texts.recogForServices,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Interest, royalties, and dividends") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recogForIntRoy,
					  "quickReplies": [
					    "Objective of ias 18",
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
			              "textToSpeech":texts.recogForIntRoy,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 18 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disclosure,
					  "quickReplies": [
					    "Objective of ias 18",
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

		})
	}											
}