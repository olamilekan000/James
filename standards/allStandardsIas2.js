const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards IAS - Contd" ){

		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IAS 20 — Accounting for Government Grants and Disclosure of Government Assistance",
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
						"title": "IAS 21 — The Effects of Changes in Foreign Exchange Rates",
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
						"title": "IAS 23 — Borrowing Costs",
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
						"title": "IAS 24 — Related Party Disclosures",
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
						"title": "IAS 26 — Accounting and Reporting by Retirement Benefit Plans",
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
						"title": "IAS 27 — Separate Financial Statements (2011)",
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
						"title": "IAS 28 — Investments in Associates and Joint Ventures (2011)",
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
						"title": "IAS 29 — Financial Reporting in Hyperinflationary Economies",
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
						"title": "IAS 30 — Disclosures in the Financial Statements of Banks and Similar Financial Institutions",
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
		})
	}
}