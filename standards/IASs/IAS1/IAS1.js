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
					    "Going concern",
					    "Fair presentation and compliance with IFRSs",
					    "Consistency of presentation",
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
					    "Going concern",
					    "Fair presentation and compliance with IFRSs",
					    "Consistency of presentation",
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
					    "Going concern",
					    "Fair presentation and compliance with IFRSs",
					    "Consistency of presentation",
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
					    "Going concern",
					    "Fair presentation and compliance with IFRSs",
					    "Consistency of presentation",
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
					    "Going concern",
					    "Fair presentation and compliance with IFRSs",
					    "Consistency of presentation",
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
					    "Going concern",
					    "Components of financial statements",
					    "Consistency of presentation",
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Going concern") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Going_concern,
					  "quickReplies": [
					    "Objective of financial statements",
					    "Fair presentation and compliance with IFRSs",
					    "Consistency of presentation",
					    "Components of financial statements",
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Accrual basis of accounting") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Accrual_basis,
					  "quickReplies": [
					    "Objective of financial statements",
					    "Fair presentation and compliance with IFRSs",
					    "Going concern",
					    "Consistency of presentation",
					    "Components of financial statements",
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Consistency of presentation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Accrual_basis,
					  "quickReplies": [
					    "Objective of financial statements",
					    "Fair presentation and compliance with IFRSs",
					    "Going concern",
					    "Components of financial statements",
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}											

}