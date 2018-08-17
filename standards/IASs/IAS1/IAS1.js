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
					    "Objective of financial statements",
					    "Components of financial statements",
					    "Fair presentation and compliance with IFRSs",
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
					    "IAS 1",
					    "Scope",
					    "Objective of financial statements",
					    "Components of financial statements",
					    "Fair presentation and compliance with IFRSs",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - scope") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.scope,
					  "quickReplies": [
					    "Objective",
					    "IAS 1",
					    "Objective of financial statements",
					    "Components of financial statements",
					    "Fair presentation and compliance with IFRSs",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Objective of financial statements") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.objOfFs,
					  "quickReplies": [
					    "Components of financial statements",
					    "Fair presentation and compliance with IFRSs",
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Components of financial statements") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.compOfFs,
					  "quickReplies": [
					    "Objective of financial statements",
					    "Fair presentation and compliance with IFRSs",
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Fair presentation and compliance with IFRSs") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.fairPresentoFFS,
					  "quickReplies": [
					    "Objective of financial statements",
					    "Components of financial statements",
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}						

}