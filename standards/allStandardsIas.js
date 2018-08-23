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
								'text': 'About IAS 1',
	  							'postback': 'About IAS 1'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 2 — Inventories",
						"subtitle": "IAS 2 Inventories contains the requirements on how to account for most types of inventory. The standard requires inventories to be measured at the lower of cost and net realisable value (NRV) and outlines acceptable methods of determining cost, including specific identification (in some cases), first-in first-out (FIFO) and weighted average cost.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 2',
	  							'postback': 'About IAS 2'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 7 — Statement of Cash Flows",
						"subtitle": "IAS 7 Statement of Cash Flows requires an entity to present a statement of cash flows as an integral part of its primary financial statements. Cash flows are classified and presented into operating activities (either using the 'direct' or 'indirect' method), investing activities or financing activities, with the latter two categories generally presented on a gross basis.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 7',
	  							'postback': 'About IAS 7'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 8 — Accounting Policies, Changes in Accounting Estimates and Errors",
						"subtitle": "IAS 8 Accounting Policies, Changes in Accounting Estimates and Errors is applied in selecting and applying accounting policies, accounting for changes in estimates and reflecting corrections of prior period errors.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 8',
	  							'postback': 'About IAS 8'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 10 — Events After the Reporting Period",
						"subtitle": "IAS 10 Events After The Reporting Period contains requirements for when events after the end of the reporting period should be adjusted in the financial statements. Adjusting events are those providing evidence of conditions existing at the end of the reporting period, whereas non-adjusting events are indicative of conditions arising after the reporting period (the latter being disclosed where material).",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS10',
	  							'postback': 'About IAS10'
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
								'text': 'Objective of IAS 11',
	  							'postback': 'Objective of IAS 11'
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
								'text': 'Objective of IAS 12',
	  							'postback': 'Objective of IAS 12'
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
								'text': 'Objective of IAS 16',
	  							'postback': 'Objective of IAS 16'
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
								'text': 'Objective of IAS 17',
	  							'postback': 'Objective of IAS 17'
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