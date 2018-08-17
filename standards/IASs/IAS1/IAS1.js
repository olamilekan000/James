const texts = require('./ias1Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 1") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.overview,
					  "quickReplies": [
					    "Objective",
					    "Scope",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - objective") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.objective,
					  "quickReplies": [
					    "Objective",
					    "Scope",
					    "Home 🏠"
					]
				}
			}]
		})
	},	

}