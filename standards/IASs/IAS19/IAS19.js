const texts = require('./IAS19Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 19") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of ias 19",
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
	if (req.body.queryResult.intent.displayName === "IAS 19 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "scope of ias 19",
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
	if (req.body.queryResult.intent.displayName === "IAS 19 - Scope") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.scope,
					  "quickReplies": [
					    "Objective of ias 19",
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
	if (req.body.queryResult.intent.displayName === "IAS 19 - Short-term employee benefits") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.shortTermBenefit,
					  "quickReplies": [
					    "Objective of ias 19",
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
				            "textToSpeech":texts.shortTermBenefit,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Profit-sharing and bonus payments") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.profit_sharing,
					  "quickReplies": [
					    "Objective of ias 19",
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
				            "textToSpeech":texts.profit_sharing,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Types of post-employment benefit plans") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.TypesOfPostEmploymnetBenefitPlan,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.TypesOfPostEmploymnetBenefitPlan,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Defined contribution plans") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.definedContPlan,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.definedContPlan,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Defined benefit plans") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.definedBenefitPlan,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.definedBenefitPlan,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Measurement of Defined benefit plans") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.measurementOfDefinedBenefitPlan,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.measurementOfDefinedBenefitPlan,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Actuarial assumptions used in measurement") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.actuarialAssumptions,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.actuarialAssumptions,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Past service cost") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.pastServiceCost,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.pastServiceCost,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Recognition of defined benefit costs") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.recogOfDefinedBenefitCost,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.recogOfDefinedBenefitCost,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Disclosures about defined benefit plans") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.disclosureOfDefinedBednefitPlans,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.disclosureOfDefinedBednefitPlans,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Other long-term benefits") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.otherLongTermPlans,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.otherLongTermPlans,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 19 - Termination benefits") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.terminationBenefit,
					  "quickReplies": [
					    "IAS 19",
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
				            "textToSpeech":texts.terminationBenefit,
				        	}
			        	}]
			    	}
				}	
			}
		})
	}															

}
