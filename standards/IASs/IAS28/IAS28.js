const texts = require('./IAS28texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 28") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 28",
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
				            "textToSpeech":texts.overview,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.obj,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.scope,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.scope,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Significant influence") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.significantInfluence,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.significantInfluence,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Joint arrangement") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.jointArrangement,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.jointArrangement,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Associate") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Associate,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.Associate,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Joint control") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.jointControl,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.jointControl,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Joint venture") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.jointVenture,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.jointVenture,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Joint venturer") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.jointVenturer,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.jointVenturer,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Equity method") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.equityMethod,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.equityMethod,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Distributions and other adjustments to carrying amount") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.distOtherAdjToCarAMt,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.distOtherAdjToCarAMt,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Potential voting rights") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.potentialVotingRight,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.potentialVotingRight,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - classFication as non-current asset") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.classFication,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.classFication,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Exemptions from applying the equity method") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.emptionFromEquityMethod,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.emptionFromEquityMethod,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Classification as held for sale") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.clasAsHeldForSale,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.clasAsHeldForSale,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Discontinuing the equity method") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disconEquityMethod,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.disconEquityMethod,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Changes in ownership interests.") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.changesInEowner,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.changesInEowner,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Equity method procedures") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.equityMethodProcedure,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.equityMethodProcedure,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Impairmrnt") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.ImpairmentIAS28,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.ImpairmentIAS28,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 28 - Disclosure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IAS 28",
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
				            "textToSpeech":texts.Disclosure,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}																			
}