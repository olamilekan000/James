const request = require('request');
require('dotenv').config();

module.exports = (req, res) => {
	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		
		// getName().then(() => {
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": `Hi What are the things you want to know about? 😃`,
						  "quickReplies": [
						    "The History of IFRS",
						    "Conceptul Framework",
						    "IAS",
						    "IFRS"
						]
					}
				}]			
			})
		// })
	}
}

