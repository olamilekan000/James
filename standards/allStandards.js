const textz = require('../texts');

module.exports = (req, res) => {

	if( req.body.queryResult.intent.displayName === "All standards" ){
		res.json(
			{
				"fulfillmentMessages": [
					{
						"card":{
							"title": "IFRS 1 - First-time Adoption of International Financial Reporting Standards",
							"subtitle": "IFRS 1 First-time Adoption of International Financial Reporting Standards sets out the procedures that an entity must follow when it adopts IFRSs for the first time as the basis for preparing its general purpose financial statements.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 1',
	      							'postback': 'Objective of IFRS 11'
								},
								{
									'text': 'Measurement of IFRS 1',
									'postback': 'Measurement of IFRS 1'
								},
								{
									'text': 'Disclosure of IFRS 1',
									'postback': 'Disclosure of IFRS 1'
								}							]
						}

					},
					{
						"card":{
							"title": "IFRS 2 - Share-based Payment",
							"subtitle": "IFRS 2 Share-based Payment requires an entity to recognise share-based payment transactions (such as granted shares, share options, or share appreciation rights) in its financial statements, including transactions with employees or other parties to be settled in cash, other assets, or equity instruments of the entity. Specific requirements are included for equity-settled and cash-settled share-based payment transactions, as well as those where the entity or supplier has a choice of cash or equity instruments. IFRS 2 was originally issued in February 2004 and first applied to annual periods beginning on or after 1 January 2005.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 2',
	      							'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs2'
								},
								{
									'text': 'Measurement of IFRS 2',
									'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs2'
								},
								{
									'text': 'Disclosure of IFRS 2',
									'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs2'
								}							]
						}

					},
					{
						"card":{
							"title": "IFRS 3 — Business Combinations",
							"subtitle": "IFRS 3 Business Combinations outlines the accounting when an acquirer obtains control of a business (e.g. an acquisition or merger). Such business combinations are accounted for using the 'acquisition method', which generally requires assets acquired and liabilities assumed to be measured at their fair values at the acquisition date. A revised version of IFRS 3 was issued in January 2008 and applies to business combinations occurring in an entity's first annual period beginning on or after 1 July 2009.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 3',
	      							'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs3'
								},
								{
									'text': 'Measurement of IFRS 3',
									'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs3'
								},
								{
									'text': 'Disclosure of IFRS 3',
									'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs3'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 4 — Insurance Contracts",
							"subtitle": "IFRS 4 was issued in March 2004 and applies to annual periods beginning on or after 1 January 2005. IFRS 4 will be replaced by IFRS 17 as of 1 Janaury 2021.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 4',
	      							'postback': 'Objective of IFRS 4'
								},
								{
									'text': 'Measurement of IFRS 4',
									'postback': 'Measurement of IFRS 4'
								},
								{
									'text': 'Disclosure of IFRS 4',
									'postback': 'Disclosure of IFRS 4'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 5 — Non-current Assets Held for Sale and Discontinued Operations",
							"subtitle": "IFRS 5 was issued in March 2004 and applies to annual periods beginning on or after 1 January 2005.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 4',
	      							'postback': 'Objective of IFRS 4'
								},
								{
									'text': 'Measurement of IFRS 4',
									'postback': 'Measurement of IFRS 4'
								},
								{
									'text': 'Disclosure of IFRS 4',
									'postback': 'Disclosure of IFRS 4'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 6 — Exploration for and Evaluation of Mineral Resources",
							"subtitle": "IFRS 6 was issued in December 2004 and applies to annual periods beginning on or after 1 January 2006.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 4',
	      							'postback': 'Objective of IFRS 4'
								},
								{
									'text': 'Measurement of IFRS 4',
									'postback': 'Measurement of IFRS 4'
								},
								{
									'text': 'Disclosure of IFRS 4',
									'postback': 'Disclosure of IFRS 4'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 7 — Financial Instruments: Disclosures",
							"subtitle": "IFRS 7 was originally issued in August 2005 and applies to annual periods beginning on or after 1 January 2007.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 4',
	      							'postback': 'Objective of IFRS 4'
								},
								{
									'text': 'Measurement of IFRS 4',
									'postback': 'Measurement of IFRS 4'
								},
								{
									'text': 'Disclosure of IFRS 4',
									'postback': 'Disclosure of IFRS 4'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 8 — Operating Segments",
							"subtitle": "IFRS 8 was issued in November 2006 and applies to annual periods beginning on or after 1 January 2009.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 4',
	      							'postback': 'Objective of IFRS 4'
								},
								{
									'text': 'Measurement of IFRS 4',
									'postback': 'Measurement of IFRS 4'
								},
								{
									'text': 'Disclosure of IFRS 4',
									'postback': 'Disclosure of IFRS 4'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS 9 — Financial Instruments",
							"subtitle": "IFRS 9 Financial Instruments issued on 24 July 2014 is the IASB's replacement of IAS 39 Financial Instruments: Recognition and Measurement.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Objective of IFRS 4',
	      							'postback': 'Objective of IFRS 4'
								},
								{
									'text': 'Measurement of IFRS 4',
									'postback': 'Measurement of IFRS 4'
								},
								{
									'text': 'Disclosure of IFRS 4',
									'postback': 'Disclosure of IFRS 4'
								}
							]
						}
					},
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
					// {//START FROM HERE
					// 	"card":{
					// 		"title": "IFRS 12 — Disclosure of Interests in Other Entities",
					// 		"subtitle": "IFRS 12 was issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
					// 		"imageUri": textz.imgeUri,
					// 		"buttons":[
					// 			{
					// 				'text': 'Objective of IFRS 12',
	    //   							'postback': 'Objective of IFRS 12'
					// 			},
					// 			{
					// 				'text': 'Measurement of IFRS 12',
					// 				'postback': 'Measurement of IFRS 12'
					// 			},
					// 			{
					// 				'text': 'Disclosure of IFRS 12',
					// 				'postback': 'Disclosure of IFRS 12'
					// 			}
					// 		]
					// 	}
					// },
					// {
					// 	"card":{
					// 		"title": "IFRS 13 — Fair Value Measurement",
					// 		"subtitle": "IFRS 13 was originally issued in May 2011 and applies to annual periods beginning on or after 1 January 2013.",
					// 		"imageUri": textz.imgeUri,
					// 		"buttons":[
					// 			{
					// 				'text': 'Objective of IFRS 13',
	    //   							'postback': 'Objective of IFRS 13'
					// 			},
					// 			{
					// 				'text': 'Measurement of IFRS 13',
					// 				'postback': 'Measurement of IFRS 13'
					// 			},
					// 			{
					// 				'text': 'Disclosure of IFRS 13',
					// 				'postback': 'Disclosure of IFRS 13'
					// 			}
					// 		]
					// 	}
					// },
					// {
					// 	"card":{
					// 		"title": "IFRS 14 — Regulatory Deferral Accounts",
					// 		"subtitle": "IFRS 14 was originally issued in January 2014 and applies to an entity's first annual IFRS financial statements for a period beginning on or after 1 January 2016.",
					// 		"imageUri": textz.imgeUri,
					// 		"buttons":[
					// 			{
					// 				'text': 'Objective of IFRS 14',
	    //   							'postback': 'Objective of IFRS 14'
					// 			},
					// 			{
					// 				'text': 'Measurement of IFRS 14',
					// 				'postback': 'Measurement of IFRS 14'
					// 			},
					// 			{
					// 				'text': 'Disclosure of IFRS 14',
					// 				'postback': 'Disclosure of IFRS 14'
					// 			}
					// 		]
					// 	}
					// },
					// {
					// 	"card":{
					// 		"title": "IFRS 15 — Revenue from Contracts with Customers",
					// 		"subtitle": "IFRS 15 was issued in May 2014 and applies to an annual reporting period beginning on or after 1 January 2018. On 12 April 2016, clarifying amendments were issued that have the same effective date as the standard itself.",
					// 		"imageUri": textz.imgeUri,
					// 		"buttons":[
					// 			{
					// 				'text': 'Objective of IFRS 15',
	    //   							'postback': 'Objective of IFRS 15'
					// 			},
					// 			{
					// 				'text': 'Measurement of IFRS 15',
					// 				'postback': 'Measurement of IFRS 15'
					// 			},
					// 			{
					// 				'text': 'Disclosure of IFRS 15',
					// 				'postback': 'Disclosure of IFRS 15'
					// 			}
					// 		]
					// 	}
					// }
					// 					{
					// 	"card":{
					// 		"title": "IFRS 16 — Leases",
					// 		"subtitle": "IFRS 16 was issued in January 2016 and applies to annual reporting periods beginning on or after 1 January 2019.",
					// 		"imageUri": textz.imgeUri,
					// 		"buttons":[
					// 			{
					// 				'text': 'Objective of IFRS 16',
	    //   							'postback': 'Objective of IFRS 16'
					// 			},
					// 			{
					// 				'text': 'Measurement of IFRS 16',
					// 				'postback': 'Measurement of IFRS 16'
					// 			},
					// 			{
					// 				'text': 'Disclosure of IFRS 16',
					// 				'postback': 'Disclosure of IFRS 16'
					// 			}
					// 		]
					// 	}
					// },
					// {
					// 	"card":{
					// 		"title": "IFRS 17 — Insurance Contracts",
					// 		"subtitle": "IFRS 17 was issued in May 2017 and applies to annual reporting periods beginning on or after 1 January 2021.",
					// 		"imageUri": textz.imgeUri,
					// 		"buttons":[
					// 			{
					// 				'text': 'Objective of IFRS 17',
	    //   							'postback': 'Objective of IFRS 17'
					// 			},
					// 			{
					// 				'text': 'Measurement of IFRS 17',
					// 				'postback': 'Measurement of IFRS 17'
					// 			},
					// 			{
					// 				'text': 'Disclosure of IFRS 17',
					// 				'postback': 'Disclosure of IFRS 17'
					// 			}
					// 		]
					// 	}
					// }
																																																																																																																						
				]
			}
		)

	}
}