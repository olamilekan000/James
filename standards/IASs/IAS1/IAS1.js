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
			}],
			  "payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":`
IAS 1 Presentation of Financial Statements sets out the overall requirements for financial statements, including how they should be structured, the minimum requirements for their content and overriding concepts such as going concern, the accrual basis of accounting and the current/non-current distinction. The standard requires a complete set of financial statements to comprise a statement of financial position, a statement of profit or loss and other comprehensive income, a statement of changes in equity and a statement of cash flows.
IAS 1 was reissued in September 2007 and applies to annual periods beginning on or after 1 January 2009.
`
			            }
			          }
			        ]
			     }
			}	
		}			

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
			}],
			  "payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":texts.objective,
			            }
			          }
			        ]
			     }
			}	
		}	
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
			}],
			  "payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":texts.scope,
			            }
			          }
			        ]
			     }
			}	
		}
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
			}],
			  "payload": {
			    "google": {
			      "expectUserResponse": true,
			      "richResponse": {
			        "items": [
			          {
			            "simpleResponse": {
			              "textToSpeech":texts.objOfFs,
			            }
			          }
			        ]
			     }
			}	
		}
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
	if (req.body.queryResult.intent.displayName === "IAS 1 - Materiality and aggregation") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Materiality_and_aggregation,
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
	if (req.body.queryResult.intent.displayName === "IAS 1 - Offsetting") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Offsetting,
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
	if (req.body.queryResult.intent.displayName === "IAS 1 - comparative info") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.comparative_info,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}	
	if (req.body.queryResult.intent.displayName === "IAS 1 - Structure and content of financial statements") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Structure_and_content_of_financial_statements,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Reporting period") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Reporting_period,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}	
	if (req.body.queryResult.intent.displayName === "IAS 1 - Current and non current classification") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Current_and_non_current_classification,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Line items") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Line_items,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IAS 1 - Format of statement") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Format_of_statement,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}	
	if (req.body.queryResult.intent.displayName === "IAS 1 - Share capital and reserves") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Share_capital_and_reserves,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}	
	if (req.body.queryResult.intent.displayName === "IAS 1 - Concepts of profit or loss and comprehensive income") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.Concepts_of_profit_or_loss_and_comprehensive_income,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}	
	if (req.body.queryResult.intent.displayName === "IAS 1 - items recognised outside of profit or loss") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": texts.items_recognised_outside_of_profit_or_loss,
					  "quickReplies": [
					    "IAS 1",
					    "Home 🏠"
					]
				}
			}]
		})
	}						
}

