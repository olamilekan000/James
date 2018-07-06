module.exports = (req, res) => {

	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": `Hi 'Hi **{{user_first_name}}**!'
					  What are the things you want to hear abou?`,
					  "quickReplies": [
					    "The History of IFRS",
					    "Conceptul Framework",
					    "IAS",
					    "IFRS"
					]
				}
			}]			
		})
	}
}
