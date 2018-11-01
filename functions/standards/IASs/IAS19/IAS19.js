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
					            "textToSpeech": `${texts.overview} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.obj} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
				            "textToSpeech": `${texts.scope} \n What else do you want to hear about?`,
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
					            "textToSpeech": `${texts.shortTermBenefit} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.profit_sharing} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.TypesOfPostEmploymnetBenefitPlan} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.definedContPlan} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.definedBenefitPlan} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.measurementOfDefinedBenefitPlan} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.actuarialAssumptions} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.pastServiceCost} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.recogOfDefinedBenefitCost} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.disclosureOfDefinedBednefitPlans} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 19"
			        		}
				       	]
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
					            "textToSpeech": `${texts.otherLongTermPlans} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
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
					            "textToSpeech": `${texts.terminationBenefit} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 2"
			        		}
				       	]
			    	}
				}	
			}
		})
	}															

}
