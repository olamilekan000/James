const texts = require('./IAS26texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 26") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective of IAS 26",
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
			        			"title": "Objective of IAS 26"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 26 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					    "IAS 26",
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
			        			"title": "Objective of IAS 26"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 26 - Retirement Benefit Plan") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.retirementBenefitPlan,
					  "quickReplies": [
					    "IAS 26",
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
					            "textToSpeech": `${texts.retirementBenefitPlan} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 26"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 26 - The report of a defined benefit") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.reportDefinedContributionPlan,
					  "quickReplies": [
					    "IAS 26",
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
					            "textToSpeech": `${texts.reportDefinedContributionPlan} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 26"
			        		}
				       	]
			    	}
				}	
			}
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 26 - disclosure") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Disclosure,
					  "quickReplies": [
					    "IAS 26",
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
					            "textToSpeech": `${texts.Disclosure} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "Objective of IAS 26"
			        		}
				       	]
			    	}
				}	
			}
		})
	}				
}