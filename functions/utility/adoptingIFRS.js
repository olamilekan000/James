module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "companies adopting IFRS") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": '1. All public companies \n 2. All Private companies \n 3. Other companies aside Government owned ones',
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
					            "textToSpeech": `1. All public companies \n 2. All Private companies \n 3. Other companies aside Government owned ones \n What else do you want to hear about?`,
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
	if (req.body.queryResult.intent.displayName === "countries adopting IFRS") {
		return res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": 'All Countries aside:\n 1. United States \n 2. Japan \n 3. India \n 4. Russia \n 5. Malaysia \n 6. Colombia ',
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
					            "textToSpeech": `All Countries aside:\n 1. United States \n 2. Japan \n 3. India \n 4. Russia \n 5. Malaysia \n 6. Colombia \n What else do you want to hear about?`,
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