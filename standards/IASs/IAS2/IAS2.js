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

