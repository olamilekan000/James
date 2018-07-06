const request = require('request');
require('dotenv').config();

module.exports = (req, res) => {
	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		let Uname = ""
		getName().then(() => {
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": `Hi ${Uname} What are the things you want to hear abou?`,
						  "quickReplies": [
						    "The History of IFRS",
						    "Conceptul Framework",
						    "IAS",
						    "IFRS"
						]
					}
				}]			
			})
		})
	}
}

var getName = () => {
		return new Promise((resolve, reject) => {

			let apiKey = process.env.FB_PAGE_ACCESS_TOKEN;
			console.log(apiKey)
			const url = `https://graph.facebook.com/v2.6/me?fields=id,name&access_token=${apiKey}`;

			request(url, (err, response, body) => {
				if(err) console.log(err)

				let Uname = JSON.parse(body)
				resolve(Uname)
				console.log(Uname.name)
			});
			
		});
	}

// getName();	
