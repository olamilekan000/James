const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards IAS - Contd2" ){

		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IAS 31 — Interests In Joint Ventures",
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
						"title": "IAS 32 — Financial Instruments: Presentation",
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
						"title": "IAS 33 — Earnings Per Share",
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
						"title": "IAS 34 — Interim Financial Reporting",
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
						"title": "IAS 35 — Discontinuing Operations",
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
						"title": "IAS 36 — Impairment of Assets",
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
						"title": "IAS 37 — Provisions, Contingent Liabilities and Contingent Assets",
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
						"title": "IAS 38 — Intangible Assets",
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
						"title": "IAS 39 — Financial Instruments: Recognition and Measurement",
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
						"title": "IAS",
						"subtitle": "Click here for more IAS standards",
						"imageUri": textz.imgeUri,
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








																																																																																				
			