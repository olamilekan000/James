const request = require('request');
require('dotenv').config();

module.exports = (req, res) => {

	if(req.body.queryResult.intent.displayName === "getTheWeather"){

		let state = "";
		if (req.body.queryResult.parameters["states"]) {
			state = req.body.queryResult.parameters["states"];
		}
		if (req.body.queryResult.parameters["geo-city"]) {
			state = req.body.queryResult.parameters["geo-city"];
		}
		if(req.body.queryResult.parameters["geo-country"]) {
			state = req.body.queryResult.parameters["geo-country"];
		}

		try{
			//fires get state function
			getState(state).then(() => {
				res.json({
					"fulfillmentMessages": [{
						"text":{
							"text": [description]
						}
					}]
				})
			});	
		}catch(e){
			res.json({
				"fulfillmentMessages": [{
					"quickReplies": {
						  "title": `Something isn't right... Choose a reply to `,
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
}

//weather api function
var getState = (state) => {
		return new Promise((resolve, reject) => {

			let apiKey = process.env.WEATHERSECRET_KEyY;
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
			request(url, (err, response, body) => {
				if(err) console.log(err)

				let wether = JSON.parse(body)
				if (wether.cod == 200 ) {
					description = "it's " + wether.weather[0].description + " in " + wether.name;
					resolve(description);
					console.log(description)
				}else if(wether.cod == 400 ){
					description = "city not found";
					resolve(description);
					
				}
			});
			
		});
	}

getState('abuja');


