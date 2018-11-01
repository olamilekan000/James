const textz = require('../texts');

module.exports = (req, res) => {
	if( req.body.queryResult.intent.displayName === "All standards IAS - Contd3" ){

		res.json({
			"fulfillmentMessages": [
				{
					"card":{
						"title": "IAS 40 — Investment Property",
						"subtitle": `IAS 40 Investment Property applies to the accounting for property (land and/or buildings) held to earn rentals or for capital appreciation (or both). Investment properties are initially measured at cost and, with some exceptions. may be subsequently measured using a cost model or fair value model, with changes in the fair value under the fair value model being recognised in profit or loss.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 40',
      							'postback': 'About IAS 40'
							}						]
					}
				},	
				{
					"card":{
						"title": "IAS 41 — Agriculture",
						"subtitle": `IAS 41 Agriculture sets out the accounting for agricultural activity – the transformation of biological assets (living plants and animals) into agricultural produce (harvested product of the entity's biological assets). The standard generally requires biological assets to be measured at fair value less costs to sell.`,
						"imageUri": textz.imgeUriIAS,
						"buttons":[
							{
								'text': 'About IAS 41',
      							'postback': 'About IAS 41'
							}
						]
					}
				}				
			]
		})
	}
}








																																																																																				
			