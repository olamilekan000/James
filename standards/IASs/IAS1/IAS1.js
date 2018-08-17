const overview = require('./ias1Texts');

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS 1") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": overview.overview,
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