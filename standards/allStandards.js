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
									'text': 'Read more...',
	      							'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs1'
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
									'text': 'Read more...',
	      							'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs2'
								}
							]
						}

					},
					{
						"card":{
							"title": "IFRS 3 — Business Combinations",
							"subtitle": "IFRS 3 Business Combinations outlines the accounting when an acquirer obtains control of a business (e.g. an acquisition or merger). Such business combinations are accounted for using the 'acquisition method', which generally requires assets acquired and liabilities assumed to be measured at their fair values at the acquisition date. A revised version of IFRS 3 was issued in January 2008 and applies to business combinations occurring in an entity's first annual period beginning on or after 1 July 2009.",
							"imageUri": textz.imgeUri,
							"buttons":[
								{
									'text': 'Read more...',
	      							'postback': 'https://www.iasplus.com/en/standards/ifrs/ifrs3'
								}
							]
						}
					}
				]
			}
		)

	}
}