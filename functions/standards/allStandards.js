const textz = require('../texts');

module.exports = (req, res) => {

	if( req.body.queryResult.intent.displayName === "All standards IFRS" ){
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
									'text': 'About IFRS 1',
	      							'postback': 'About IFRS 1'
								}							
							]
						}

					},
					{
						"card":{
							"title": "IFRS 2 - Share-based Payment",
							"subtitle": "IFRS 2 Share-based Payment requires an entity to recognise share-based payment transactions (such as granted shares, share options, or share appreciation rights) in its financial statements, including transactions with employees or other parties to be settled in cash, other assets, or equity instruments of the entity. Specific requirements are included for equity-settled and cash-settled share-based payment transactions, as well as those where the entity or supplier has a choice of cash or equity instruments. IFRS 2 was originally issued in February 2004 and first applied to annual periods beginning on or after 1 January 2005.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'About IFRS 2',
	      							'postback': 'About IFRS 2'
								}						]
						}

					},
					{
						"card":{
							"title": "IFRS 3 — Business Combinations",
							"subtitle": "IFRS 3 Business Combinations outlines the accounting when an acquirer obtains control of a business (e.g. an acquisition or merger). Such business combinations are accounted for using the 'acquisition method', which generally requires assets acquired and liabilities assumed to be measured at their fair values at the acquisition date. A revised version of IFRS 3 was issued in January 2008 and applies to business combinations occurring in an entity's first annual period beginning on or after 1 July 2009.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'About IFRS 3',
	      							'postback': 'About IFRS 3'
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
									'text': 'About IFRS 4',
	      							'postback': 'About IFRS 4'
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
									'text': 'About IFRS 4',
	      							'postback': 'About IFRS 4'
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
									'text': 'About IFRS 6',
	      							'postback': 'About IFRS 6'
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
									'text': 'About IFRS 7',
	      							'postback': 'About IFRS 7'
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
									'text': 'About IFRS 8',
	      							'postback': 'About IFRS 8'
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
									'text': 'About IFRS 9',
	      							'postback': 'About IFRS 9'
								}
							]
						}
					},
					{
						"card":{
							"title": "IFRS",
							"subtitle": "Click here for more IFRS standards",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'More'
								}
							]
						}
					},																																																																																																																						
				]
			}
		)

	}
}