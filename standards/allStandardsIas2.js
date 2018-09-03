const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards IAS - Contd" ){

		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IAS 20 — Accounting for Government Grants and Disclosure of Government Assistance",
						"subtitle": `IAS 20 Accounting for Government Grants and Disclosure of Government Assistance outlines how to account for government grants and other assistance. Government grants are recognised in profit or loss on a systematic basis over the periods in which the entity recognises expenses for the related costs for which the grants are intended to compensate, which in the case of grants related to assets requires setting up the grant as deferred income or deducting it from the carrying amount of the asset. IAS 20 was issued in April 1983 and is applicable to annual periods beginning on or after 1 January 1984.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS  20',
	  							'postback': 'About IAS 20'
							}
						]
					}
				},			
				{
					"card":{
						"title": "IAS 21 — The Effects of Changes in Foreign Exchange Rates",
						"subtitle": `IAS 21 The Effects of Changes in Foreign Exchange Rates outlines how to account for foreign currency transactions and operations in financial statements, and also how to translate financial statements into a presentation currency. An entity is required to determine a functional currency (for each of its operations if necessary) based on the primary economic environment in which it operates and generally records foreign currency transactions using the spot conversion rate to that functional currency on the date of the transaction. IAS 21 was reissued in December 2003 and applies to annual periods beginning on or after 1 January 2005.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 21',
      							'postback': 'About IAS 21'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 23 — Borrowing Costs",
						"subtitle": `IAS 23 Borrowing Costs requires that borrowing costs directly attributable to the acquisition, construction or production of a 'qualifying asset' (one that necessarily takes a substantial period of time to get ready for its intended use or sale) are included in the cost of the asset. Other borrowing costs are recognised as an expense. was reissued in March 2007 and applies to annual periods beginning on or after 1 January 2009.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 23',
      							'postback': 'About IAS 23'
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