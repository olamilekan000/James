const IAS8texts = require('./IAS8texts')

module.exports = (req, res) => {
	if (req.body.queryResult.intent.displayName === "IAS8 - IAS8") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.overview,
					  "quickReplies": [
					    "Accounting Policies",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Accounting policies") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.acctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - International Financial Reporting Standards") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.IFRS,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Materiality") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.materiality,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}						
	if (req.body.queryResult.intent.displayName === "IAS8 - Selection and application of accounting policies") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.selectionOfplocies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS8 - Consistency of accounting policies") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.consistencyOfPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}	
	if (req.body.queryResult.intent.displayName === "IAS8 - Changes in accounting policies") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.changesOfAcctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - retrospective") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.retrospective,
					  "quickReplies": [
					    "IAS8",
					    "Prior Period Errors",
					    "Changes of Accounting Policies",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosures relating to changes in accounting policy") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.discRelatedToANewStndAcctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosures relating to voluntary changes in accounting policy") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.discRelatedToVoluntaryAcctngPolicies,
					  "quickReplies": [
					    "IAS8",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Disclosing Accounting Estimates") {//change in accounting estimate, effect of a change in an accounting estimate
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.chngOfAcctEstm,
					  "quickReplies": [
					    "IAS8",
					    "Home 🏠"
					]
				}
			}]
		});		
	}
	if (req.body.queryResult.intent.displayName === "IAS8 - Errors") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": IAS8texts.Errors,
					  "quickReplies": [
					    "IAS8",
					    "Home 🏠"
					]
				}
			}]
		});		
	}											
}