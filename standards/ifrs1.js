const textz = require('../texts');

module.exports = (req, res) => {

		if (req.body.queryResult.intent.displayName === "History of IFRS") {
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": textz.ifrsHistory,
					  "quickReplies": [
					    "IAS",
					    "IFRS"
					]
				}
			}]
		})
	}else if (req.body.queryResult.intent.displayName === "IFRS1") {
			res.json({
				"fulfillmentMessages": [
					{
						"quickReplies": {
							"title": "IFRS 1 First-time Adoption of International Financial Reporting Standards sets out the procedures that an entity must follow when it adopts IFRSs for the first time as the basis for preparing its general purpose financial statements. The IFRS grants limited exemptions from the general requirement to comply with each IFRS effective at the end of its first IFRS reporting period. A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							"quickReplies": [
								"Objective of IFRS 1",
								"measurement of IFRS 1",
								"Disclosure of IFRS 1",
								"Read more about IFRS 1"
							]
						}

					}
				]
			})

	}else if (req.body.queryResult.intent.displayName === "IFRS1 - objective") {
				res.json({
					"fulfillmentMessages": [{
						"quickReplies": {
							  "title": "A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							  "quickReplies": [
							    "measurement of IFRS 1",
							    "Disclosure of IFRS 1",
							    "Read more about IFRS 1"
							  ]
						}
				}]
			})
	}else if (req.body.queryResult.intent.displayName === "IFRS1 - measurement") {
		res.json({
			"fulfillmentMessages": [
				{
					"quickReplies": {
							  "title": "A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							  "quickReplies": [
							    "Objective of IFRS 1",
							    "Disclosure of IFRS 1",
							    "Read more about IFRS 1"
							  ]
					}
				}
			]
		})
	}else if (req.body.queryResult.intent.displayName === "IFRS1 - disclosure") {
		res.json({
			"fulfillmentMessages": [
				{
					"quickReplies": {
							  "title": "A restructured version of IFRS 1 was issued in November 2008 and applies if an entity's first IFRS financial statements are for a period beginning on or after 1 July 2009.",
							  "quickReplies": [
							    "Objective of IFRS 1",
							    "measurement of IFRS 1",
							    "Read more about IFRS 1"
							  ]
					}
				}
			]
		})
	}else if (req.body.queryResult.intent.displayName === "IFRS1 - Read more") {
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