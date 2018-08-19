const texts = require('./ias2Texts');

module.exports = (req, res) => {
	
	switch(req.body.queryResult.intent.displayName){
		case req.body.queryResult.intent.displayName === "IAS2":
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
		break

	}
}

