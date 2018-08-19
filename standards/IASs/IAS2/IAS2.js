const texts = require('./ias2Texts');

module.exports = (req, res) => {
	
	switch(req.body.queryResult.intent.displayName){
		case "IAS2":
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
			});
			break;
		case "IAS2 - Objective of IAS 2":
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": texts.obj,
						  "quickReplies": [
						    "Scope",
						    "diclosure",
						    "Home 🏠"
						]
					}
				}]
			});
			break;
		case "IAS2 - scope":
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": texts.scope,
						  "quickReplies": [
						    "diclosure",
						    "Home 🏠"
						]
					}
				}]
			});
			break;	
		case "IAS2 - measurement":
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": texts.measurement,
						  "quickReplies": [
						    "diclosure",
						    "Home 🏠"
						]
					}
				}]
			});
			break;
		case "IAS2 - NRV":
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": texts.NRV,
						  "quickReplies": [
						    "diclosure",
						    "Home 🏠"
						]
					}
				}]
			});
			break;	
		case "IAS2 - Expense recognition":
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": texts.Expense_recognition,
						  "quickReplies": [
						    "diclosure",
						    "Home 🏠"
						]
					}
				}]
			});
			break;	
		case "IAS2 - disclosure":
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": texts.disclosure,
						  "quickReplies": [
						    "diclosure",
						    "Home 🏠"
						]
					}
				}]
			});
			break;																			
		default:
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": "Still learning...",
						  "quickReplies": [
						    "Home 🏠"
						]
					}
				}]
			});
	}
}

