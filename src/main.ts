import './style.css'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7151a85878mshb32875c0cba7e82p1de453jsn143e8109a919',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));