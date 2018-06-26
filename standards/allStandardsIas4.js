const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards IAS - Contd3" ){

		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IAS 40 — Investment Property",
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
						"title": "IAS 41 — Agriculture",
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
				}				
			]
		})
	}
}








																																																																																				
			