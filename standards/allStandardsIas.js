const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards IAS" ){

		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IAS 1 — Presentation of Financial Statements",
						"subtitle": "IAS 1 Presentation of Financial Statements sets out the overall requirements for financial statements, including how they should be structured, the minimum requirements for their content and overriding concepts such as going concern, the accrual basis of accounting and the current/non-current distinction. The standard requires a complete set of financial statements to comprise a statement of financial position, a statement of profit or loss and other comprehensive income, a statement of changes in equity and a statement of cash flows.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'Objective of IAS 1',
	  							'postback': 'Objective of IAS 1'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 2 — Inventories",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'Objective of IAS 2',
	  							'postback': 'Objective of IAS 2'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 7 — Statement of Cash Flows",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
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
						"title": "IAS 8 — Accounting Policies, Changes in Accounting Estimates and Errors",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
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
						"title": "IAS 10 — Events After the Reporting Period",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
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
						"title": "IAS 11 — Construction Contracts (Will be superseded by IFRS 15 as of 1 January 2018)",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
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
						"title": "IAS 12 — Income Taxes",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
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
						"title": "IAS 16 — Property, Plant and Equipment",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
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
						"title": "IAS 17 — Leases (Will be superseded by IFRS 16 as of 1 January 2019)",
						"subtitle": "IFRS 10 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
						"imageUri": textz.imgeUriIAS,
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
						"title": "IAS",
						"subtitle": "Click here for more IAS standards",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'More'
							}
						]
					}
				}													
			]
		});

	}
}