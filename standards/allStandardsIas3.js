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
						"subtitle": `IAS 33 Earnings Per Share sets out how to calculate both basic earnings per share (EPS) and diluted EPS. The calculation of Basic EPS is based on the weighted average number of ordinary shares outstanding during the period, whereas diluted EPS also includes dilutive potential ordinary shares (such as options and convertible instruments) if they meet certain criteria. IAS 33 was reissued in December 2003 and applies to annual periods beginning on or after 1 January 2005.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 33',
      							'postback': 'About IAS 33'
							}
						]
					}
				},			
				{
					"card":{
						"title": "IAS 34 — Interim Financial Reporting",
						"subtitle": `IAS 34 Interim Financial Reporting applies when an entity prepares an interim financial report, without mandating when an entity should prepare such a report. Permitting less information to be reported than in annual financial statements (on the basis of providing an update to those financial statements), the standard outlines the recognition, measurement and disclosure requirements for interim reports. IAS 34 was issued in June 1998 and is operative for periods beginning on or after 1 January 1999.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 34',
      							'postback': 'About IAS 34'
							}
						]
					}
				},		
				{
					"card":{
						"title": "IAS 36 — Impairment of Assets",
						"subtitle": `IAS 36 Impairment of Assets seeks to ensure that an entity's assets are not carried at more than their recoverable amount (i.e. the higher of fair value less costs of disposal and value in use). With the exception of goodwill and certain intangible assets for which an annual impairment test is required, entities are required to conduct impairment tests where there is an indication of impairment of an asset, and the test may be conducted for a 'cash-generating unit' where an asset does not generate cash inflows that are largely independent of those from other assets.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 36',
      							'postback': 'About IAS 36'
							}
						]
					}
				},	
				{
					"card":{
						"title": "IAS 37 — Provisions, Contingent Liabilities and Contingent Assets",
						"subtitle": `IAS 37 Provisions, Contingent Liabilities and Contingent Assets outlines the accounting for provisions (liabilities of uncertain timing or amount), together with contingent assets (possible assets) and contingent liabilities (possible obligations and present obligations that are not probable or not reliably measurable). Provisions are measured at the best estimate (including risks and uncertainties) of the expenditure required to settle the present obligation, and reflects the present value of expenditures required to settle the obligation where the time value of money is material. IAS 37 was issued in September 1998 and is operative for periods beginning on or after 1 July 1999`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 37',
      							'postback': 'About IAS 37'
							}
						]
					}
				},		
				{
					"card":{
						"title": "IAS 38 — Intangible Assets",
						"subtitle": `IAS 38 Intangible Assets outlines the accounting requirements for intangible assets, which are non-monetary assets which are without physical substance and identifiable (either being separable or arising from contractual or other legal rights). Intangible assets meeting the relevant recognition criteria are initially measured at cost, subsequently measured at cost or using the revaluation model, and amortised on a systematic basis over their useful lives (unless the asset has an indefinite useful life, in which case it is not amortised).`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 38',
      							'postback': 'About IAS 38'
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








																																																																																				
			