const request = require('request');
require('dotenv').config();

module.exports = (req, res) => {
	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		
		// getName().then(() => {
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": `Hi! I am James, let's have a chat about IFRS? 😃
						  You can click on the buttons below to save time typing.`,
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

