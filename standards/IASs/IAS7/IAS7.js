// const texts = require('./ias7Texts');

// module.exports = (req, res) => {
	
// 	switch(req.body.queryResult.intent.displayName){
// 		case "IAS7":
// 			res.json({
// 				"fulfillmentMessages": [{
// 					"quickReplies": {
// 						  "title": texts.overview,
// 						  "quickReplies": [
// 						    "Objective",
// 						    "measurement",
// 						    "Home 🏠"
// 						]
// 					}
// 				}]
// 			});
// 			break;
// 		case "IAS7 - Objective":
// 			res.json({
// 				"fulfillmentMessages": [{
// 					"quickReplies": {
// 						  "title": texts.obj,
// 						  "quickReplies": [
// 						  	"IAS7",
// 						    "Home 🏠"
// 						]
// 					}
// 				}]
// 			});
// 			break;	
// 		case "IAS7 - Presentation of the Statement of Cash Flows":
// 			res.json({
// 				"fulfillmentMessages": [{
// 					"quickReplies": {
// 						  "title": texts.presentation,
// 						  "quickReplies": [
// 							"IAS7",
// 						    "Home 🏠"
// 						]
// 					}
// 				}]
// 			});
// 			break;																												
// 		default:
// 			res.json({
// 				"fulfillmentMessages": [{
// 					"quickReplies": {
// 						  "title": "oops, I haven't learnt that... 🙈",
// 						  "quickReplies": [
// 						  	"IAS7",
// 						    "Home 🏠"
// 						]
// 					}
// 				}]
// 			});
// 	}
// }

