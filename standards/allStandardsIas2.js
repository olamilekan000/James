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
						"subtitle": `IAS 24 Related Party Disclosures requires disclosures about transactions and outstanding balances with an entity's related parties. The standard defines various classes of entities and people as related parties and sets out the disclosures required in respect of those parties, including the compensation of key management personnel. IAS 24 was reissued in November 2009 and applies to annual periods beginning on or after 1 January 2011.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 24',
      							'postback': 'About IAS 24'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 26 — Accounting and Reporting by Retirement Benefit Plans",
						"subtitle": `IAS 26 Accounting and Reporting by Retirement Benefit Plans outlines the requirements for the preparation of financial statements of retirement benefit plans. It outlines the financial statements required and discusses the measurement of various line items, particularly the actuarial present value of promised retirement benefits for defined benefit plans. IAS 26 was issued in January 1987 and applies to annual periods beginning on or after 1 January 1988.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 26',
      							'postback': 'About IAS 26'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 27 — Separate Financial Statements (2011)",
						"subtitle": `IAS 27 Separate Financial Statements (as amended in 2011) outlines the accounting and disclosure requirements for 'separate financial statements', which are financial statements prepared by a parent, or an investor in a joint venture or associate, where those investments are accounted for either at cost or in accordance with IAS 39 Financial Instruments: Recognition and Measurement or IFRS 9 Financial Instruments. The standard also outlines the accounting requirements for dividends and contains numerous disclosure requirements. IAS 27 was reissued in May 2011 and applies to annual periods beginning on or after 1 January 2013, superseding IAS 27 Consolidated and Separate Financial Statements from that date`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 27',
      							'postback': 'About IAS 27'
							}
						]
					}
				},	
				{
					"card":{
						"title": "IAS 28 — Investments in Associates and Joint Ventures (2011)",
						"subtitle": `IAS 28 Investments in Associates and Joint Ventures (as amended in 2011) outlines how to apply, with certain limited exceptions, the equity method to investments in associates and joint ventures. The standard also defines an associate by reference to the concept of "significant influence", which requires power to participate in financial and operating policy decisions of an investee (but not joint control or control of those polices). IAS 28 was reissued in May 2011 and applies to annual periods beginning on or after 1 January 2013.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 28',
      							'postback': 'About IAS 28'
							}
						]
					}
				},	
				{
					"card":{
						"title": "IAS 29 — Financial Reporting in Hyperinflationary Economies",
						"subtitle": `IAS 29 Financial Reporting in Hyperinflationary Economies applies where an entity's functional currency is that of a hyperinflationary economy. The standard does not prescribe when hyperinflation arises but requires the financial statements (and corresponding figures for previous periods) of an entity with a functional currency that is hyperinflationary to be restated for the changes in the general pricing power of the functional currency. IAS 29 was issued in July 1989 and is operative for periods beginning on or after 1 January 1990.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 29',
      							'postback': 'About IAS 29'
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