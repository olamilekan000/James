const texts = require('./ias7Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS7") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective",
					    "measurement",
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
			        			"title": "Objective of IAS 7"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS7 - Objective") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.obj,
					  "quickReplies": [
					  	"IAS7",
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
			        			"title": "IAS 7"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS7 - Presentation of the Statement of Cash Flows") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.presentation,
					  "quickReplies": [
						"IAS7",
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
					            "textToSpeech": `${texts.presentation} \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		},
			        		{
			        			"title": "IAS 7"
			        		}
				       	]
			    	}
				}	
			}	
		});		
	}
}


