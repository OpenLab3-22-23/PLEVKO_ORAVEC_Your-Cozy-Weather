import './style.css'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8138cfeedmsh79a33042d05d082p141447jsnb7582032d27a',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));