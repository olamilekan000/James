const textz = require('../texts');

module.exports = (req, res) => {

	if (req.body.queryResult.intent.displayName === "History of IFRS") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": textz.ifrsHistory,
					  "quickReplies": [
					    "IAS",
					    "IFRS",
					    "Home 🏠"
					]
				}
			}]
		})
	}
	if (req.body.queryResult.intent.displayName === "IFRS1 - Read more") {
		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IFRS 1",
						"subtitle": "IFRS 1 First-time Adoption of International Financial Reporting Standards sets out the procedures that an entity must follow when it adopts IFRSs for the first time as the basis for preparing its general purpose financial statements.",
						"imageUri": textz.imgeUri,
						"buttons":[
							{
								'text': 'Read more...',
      							'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs1'
							}
						]
					}
				}
			]
		})
	}
}