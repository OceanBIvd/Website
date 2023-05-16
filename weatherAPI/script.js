const express = require('express');
const request = require("request");
const cors = require('cors');


const app = express();

app.use(cors());

const API_KEY = "4527a2985c4346a4d21bbcbf3e38f1e1";


app.get('/weather/:lat/:lon', (req, res) => {
  //res.send('Hello World!');
  console.log("welcome to the root!");
  
  var lat = req.params.lat;
  var lon = req.params.lon;
  var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
  
  
	request(url, (error, response, body)=>{
		
		// Printing the error if occurred
		if(error) console.log(error)
	   
		// Printing status code
		console.log(response.statusCode);

        body = JSON.parse(body);
		let weatherStatus = body.weather[0].main
		res.send({"temperature" : body.main.temp, "weatherStatus" : weatherStatus})
		// Printing body
		console.log(body.main.temp);
	});
  
});


app.get('/5day/:lat/:lon', (req, res) => {
	//res.send('Hello World!');
	console.log("welcome to the root!");
	
	var lat = req.params.lat;
	var lon = req.params.lon;
	var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
  
	
	  request(url, (error, response, body)=>{
		  
		  // Printing the error if occurred
		  if(error) console.log(error)
		 
		  // Printing status code
		  console.log(response.statusCode);
		   
		  // Printing body
		  body = JSON.parse(body)

		  let todaysDate = new Date().getDay() 

		  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		  let forecast = [];

		for (let i = 0; i < 5; i++){
			let tempSum = 0
			let count = 0
			for (const  dataPoint of body.list){ 
				let date = new Date(dataPoint.dt * 1000) 
				if (date.getDay() == todaysDate ){ 
					count++; // Add 1 to the total data points
					tempSum += dataPoint.main.temp 
				}
			}
		let day = {"dayName": week[todaysDate], "temp": Math.round(tempSum / count) } 
		forecast.push(day);
		todaysDate = (todaysDate + 1) % 7
		}

		res.send(forecast);
		

	  });
	
  });


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

