module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "full meaning of IFRS") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": 'International Financial Reporting Standards',
					  "quickReplies": [
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
					            "textToSpeech": `International Financial Reporting Standards \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}

	if (req.body.queryResult.intent.displayName === "full meaning of IAS") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": 'International Accounting Standards',
					  "quickReplies": [
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
					            "textToSpeech": `International Accounting Standards \n What else do you want to hear about?`,
					        	}
				        	}],
				        "suggestions": [
			        		{
			        			"title": "Home"
			        		}
				       	]
			    	}
				}	
			}
		});		
	}	
}