const IAS8texts = require('./IAS8texts')

module.exports = (req, res) => {
	
	switch(req.body.queryResult.intent.displayName){
		case "IAS8":
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": "IAS8texts.overview",
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
		default:
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": "oops, I haven't learnt IAS8... 🙈",
						  "quickReplies": [
						  	"IAS",
						    "Home 🏠"
						]
					}
				}]
			});			
	}
}