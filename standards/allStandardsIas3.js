const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards IAS - Contd2" ){

		res.json({
			"fulfillmentMessages": [	
				{
					"card":{
						"title": "IAS 32 — Financial Instruments: Presentation",
						"subtitle": `IAS 32 Financial Instruments: Presentation outlines the accounting requirements for the presentation of financial instruments, particularly as to the classification of such instruments into financial assets, financial liabilities and equity instruments. The standard also provide guidance on the classification of related interest, dividends and gains/losses, and when financial assets and financial liabilities can be offset. IAS 32 was reissued in December 2003 and applies to annual periods beginning on or after 1 January 2005.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 32',
      							'postback': 'About IAS 32'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 33 — Earnings Per Share",
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
						"title": "IAS 34 — Interim Financial Reporting",
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
						"title": "IAS 35 — Discontinuing Operations",
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
						"title": "IAS 36 — Impairment of Assets",
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
						"title": "IAS 37 — Provisions, Contingent Liabilities and Contingent Assets",
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
						"title": "IAS 38 — Intangible Assets",
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
						"title": "IAS 39 — Financial Instruments: Recognition and Measurement",
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








																																																																																				
			