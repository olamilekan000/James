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
						    "disclosure",
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
						    "IAS 2",
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
						  "title": texts.Scope,
						  "quickReplies": [
						    "IAS 2",
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
						    "IAS 2",
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
						    "IAS 2",
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
						    "IAS 2",
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
						    "IAS 2",
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
						  "title": "oops, I haven't learnt that... 🙈",
						  "quickReplies": [
						  	"IAS 2",
						    "Home 🏠"
						]
					}
				}]
			});
	}
}

