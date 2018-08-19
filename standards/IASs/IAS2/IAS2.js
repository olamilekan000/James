const texts = require('./ias2Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS2") {
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
}