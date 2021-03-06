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
						"subtitle": "IAS 11 Construction Contracts provides requirements on the allocation of contract revenue and contract costs to accounting periods in which construction work is performed. Contract revenues and expenses are recognised by reference to the stage of completion of contract activity where the outcome of the construction contract can be estimated reliably, otherwise revenue is recognised only to the extent of recoverable contract costs incurred.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS11',
	  							'postback': 'About IAS11'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 12 — Income Taxes",
						"subtitle": "IAS 12 Income Taxes implements a so-called 'comprehensive balance sheet method' of accounting for income taxes which recognises both the current tax consequences of transactions and events and the future tax consequences of the future recovery or settlement of the carrying amount of an entity's assets and liabilities. Differences between the carrying amount and tax base of assets and liabilities, and carried forward tax losses and credits, are recognised, with limited exceptions, as deferred tax liabilities or deferred tax assets, with the latter also being subject to a 'probable profits' test.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 12',
	  							'postback': 'About IAS 12'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 16 — Property, Plant and Equipment",
						"subtitle": "IAS 16 Property, Plant and Equipment outlines the accounting treatment for most types of property, plant and equipment. Property, plant and equipment is initially measured at its cost, subsequently measured either using a cost or revaluation model, and depreciated so that its depreciable amount is allocated on a systematic basis over its useful life. IAS 16 was reissued in December 2003 and applies to annual periods beginning on or after 1 January 2005.",
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 16',
	  							'postback': 'About IAS 16'
							}
						]
					}
				},
				{
					"card":{
						"title": "IAS 19 — Employee Benefits (2011)",
						"subtitle": `IAS 19 Employee Benefits (amended 2011) outlines the accounting requirements for employee benefits, including short-term benefits (e.g. wages and salaries, annual leave), post-employment benefits such as retirement benefits, other long-term benefits (e.g. long service leave) and termination benefits. The standard establishes the principle that the cost of providing employee benefits should be recognised in the period in which the benefit is earned by the employee, rather than when it is paid or payable, and outlines how each category of employee benefits are measured, providing detailed guidance in particular about post-employment benefits. IAS 19 (2011) was issued in 2011, supersedes IAS 19 Employee Benefits (1998), and is applicable to annual periods beginning on or after 1 January 2013.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 19',
	  							'postback': 'About IAS 19'
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