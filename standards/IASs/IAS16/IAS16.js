const texts = require('./IAS16texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 16") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Overview,
					  "quickReplies": [
					    "Objective of ias 16",
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
			              "textToSpeech":texts.Overview,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Objective of IAS 16") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj_IAS_16,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.obj_IAS_16,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Scope") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Scope_ias18,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.Scope_ias18,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recognition,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.recognition,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Initial measurement") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ini_msrmnt,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.ini_msrmnt,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Measurement subsequent to initial recognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.measOfSubsequent,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.measOfSubsequent,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - The revaluation model") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.revModel,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.revModel,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Depreciation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Depreciation,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.Depreciation,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Recoverability of the carrying amount") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recovOfCarryingAmt,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.recovOfCarryingAmt,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Derecognition") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Derecognition,
					  "quickReplies": [
					    "IAS 16",
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
			              "textToSpeech":texts.Derecognition,
			            }
			          }
			        ]
			     }
			}	
		}			

		})
	}
	if (req.body.queryResult.intent.displayName === "IAS16 - Disclosure") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IAS 16",
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

		})
	}																
}