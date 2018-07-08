const request = require('request');
require('dotenv').config();

module.exports = (req, res) => {
	if(req.body.queryResult.intent.displayName === "Default Welcome Intent"){
		
		// getName().then(() => {
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": `Hi What are the things you want to know about?`,
						  "quickReplies": [
						    "The History of IFRS",
						    "Conceptul Framework",
						    "IAS",
						    "IFRS"
						]
					}
				}]			
			})
		// })
	}
}

//gets the name of the user
// var getName = () => {
// 	return new Promise((resolve, reject) => {
// 	let Uname
// 	let apiKey = process.env.FB_PAGE_ACCESS_TOKEN;
// 	console.log(apiKey)
// 	const url = `https://graph.facebook.com/v2.6/me?fields=name&access_token=${apiKey}`;

// 	request(url, (err, response, body) => {
// 		if(err) console.log(err)

// 		let Uname = JSON.parse(body)
// 		let Unewname = Uname.name
// 		resolve(Unewname)
// 		console.log(Unewname)
// 	});

// 	});
// }


// getName();	
