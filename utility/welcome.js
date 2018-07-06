module.exports = (req, res) => {

	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		res.json({
			"fulfillmentMessages": [{
				"quickReplies": {
					  "title": `Hi {{user_first_name}}! What are the things you want to hear abou?`,
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

	// request({
 // 		url: 'https://graph.facebook.com/v2.6/me/messages',
	// 	qs: { access_token: process.env.FB_PAGE_ACCESS_TOKEN },
	// 	method: `POST`,
	// 	json: {
	// 		recipient: { id: senderId },
	// 		message: { text },
	// 	}
	// });
