const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards contd" ){

		res.json({
			"fulfillmentMessages": [
					{
						"card":{
							"title": "IFRS 10 — Consolidated Financial Statements",
							"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 10',
	      							'postback': 'Objective of IFRS 10'
								},
								{
									'text': 'Measurement of IFRS 10',
									'postback': 'Measurement of IFRS 10'
								},
								{
									'text': 'Disclosure of IFRS 10',
									'postback': 'Disclosure of IFRS 10'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 11 — Joint Arrangements",
							"subtitle": "IFRS 11 was issued in May 2011 and applies to annual reporting periods beginning on or after 1 January 2013.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 11',
	      							'postback': 'Objective of IFRS 11'
								},
								{
									'text': 'Measurement of IFRS 11',
									'postback': 'Measurement of IFRS 11'
								},
								{
									'text': 'Disclosure of IFRS 11',
									'postback': 'Disclosure of IFRS 11'
								}
							]
						}
					},
					{//START FROM HERE
						"card":{
							"title": "IFRS 12 — Disclosure of Interests in Other Entities",
							"subtitle": "IFRS 12 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 12',
	      							'postback': 'Objective of IFRS 12'
								},
								{
									'text': 'Measurement of IFRS 12',
									'postback': 'Measurement of IFRS 12'
								},
								{
									'text': 'Disclosure of IFRS 12',
									'postback': 'Disclosure of IFRS 12'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 13 — Fair Value Measurement",
							"subtitle": "IFRS 13 was originally issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 13',
	      							'postback': 'Objective of IFRS 13'
								},
								{
									'text': 'Measurement of IFRS 13',
									'postback': 'Measurement of IFRS 13'
								},
								{
									'text': 'Disclosure of IFRS 13',
									'postback': 'Disclosure of IFRS 13'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 14 — Regulatory Deferral Accounts",
							"subtitle": "IFRS 14 was originally issued in January 2014 and applies to an entity's first annual IFRS financial statements for a period beginning on or after 1 January 2016.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 14',
	      							'postback': 'Objective of IFRS 14'
								},
								{
									'text': 'Measurement of IFRS 14',
									'postback': 'Measurement of IFRS 14'
								},
								{
									'text': 'Disclosure of IFRS 14',
									'postback': 'Disclosure of IFRS 14'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 15 — Revenue from Contracts with Customers",
							"subtitle": "IFRS 15 was issued in May 2014 and applies to an annual reporting period beginning on or after 1 January 2018. On 12 April 2016, clarifying amendments were issued that have the same effective date as the standard itself.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 15',
	      							'postback': 'Objective of IFRS 15'
								},
								{
									'text': 'Measurement of IFRS 15',
									'postback': 'Measurement of IFRS 15'
								},
								{
									'text': 'Disclosure of IFRS 15',
									'postback': 'Disclosure of IFRS 15'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 16 — Leases",
							"subtitle": "IFRS 16 was issued in January 2016 and applies to annual reporting periods beginning on or after 1 January 2019.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 16',
	      							'postback': 'Objective of IFRS 16'
								},
								{
									'text': 'Measurement of IFRS 16',
									'postback': 'Measurement of IFRS 16'
								},
								{
									'text': 'Disclosure of IFRS 16',
									'postback': 'Disclosure of IFRS 16'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 17 — Insurance Contracts",
							"subtitle": "IFRS 17 was issued in May 2017 and applies to annual reporting periods beginning on or after 1 January 2021.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 17',
	      							'postback': 'Objective of IFRS 17'
								},
								{
									'text': 'Measurement of IFRS 17',
									'postback': 'Measurement of IFRS 17'
								},
								{
									'text': 'Disclosure of IFRS 17',
									'postback': 'Disclosure of IFRS 17'
								}
							]
						}
					}
			]
		})

	}


}