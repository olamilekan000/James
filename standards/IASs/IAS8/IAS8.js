const IAS8texts = require('./IAS8texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS8") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.overview,
					  "quickReplies": [
					    "Objective",
					    "disclosure",
					    "Scope",
					    "Home 🏠"
					]
				}
			}]
		});		
	}	
}