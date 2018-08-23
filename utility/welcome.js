const request = require('request');

module.exports = (req, res) => {
	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		res.json({
			"fulfillmentMessages": [
			{
				"quickReplies": {
					  "title": `Hi! I am James, let's talk about IFRS? 😃. 
					  
Click on any of the buttons below to begin a conversation`,

					  "quickReplies": [
					    "The History of IFRS",
					    "Conceptul Framework",
					    "IAS",
					    "IFRS"
					]
				}
			}
			]			
		})
	}
}

