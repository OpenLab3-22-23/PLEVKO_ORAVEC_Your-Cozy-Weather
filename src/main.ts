
import './style.css'
//import './gulky.ts'
/*document.querySelector<HTMLDivElement>('#app')!.innerHTML =`




`*/
/*function maininput(){

}

function SecondState() {

	document.getElementById("maininput()").onsubmit();

  }*/
/*nejaké mesto(list - databáza s mestami) a nastaviť mu propertu;
 vytvoriť fciu či metódu ktorá nam získa info z ’options’; 
 "mestu" sa nastavia Naše parametre;
 (nasleduje nastavenie vykreslovania Našich parametrov) ; 
  ..... */ 


 /* (document).ready(function () { 
	// SUBMIT FORM 
	("#weatherForm").submit( (event) => {
	// Prevent the form from submitting via the browser. 
	event.preventDefault(); 
	ajaxPost();
	});
	function ajaxPost() { 
	// PREPARE FORM DATA
	var formData = {
	 cityname: $("#cityname").val(),
	}
	// DO POST 
	ajax({
	type: "POST",
	 contentType: "application/json",
	url: window.location + "api/customers/save",
	data: JSON.stringify(formData),
	dataType: 'json',
	success: (output)=> { 
	("#postResultDiv").html("<p>" +
	"<br>" +
	"" + JSON.stringify(`<code> ${output.addname} </code> Current Tempeature is <code>${output.temp}<sup>o</sup>C </code>`) + "</p>"); 
	},
	error: (e) => {
	alert("Error!"); 
	console.log("ERROR: ", e); 
	}
	}); 
	// Reset FormData after Posting 
	resetData(); 
	} 
	function resetData() {
	("#citytname").val(""); 
	}
	})*/

  /*function spracujData(data: any){
	  const container = document.querySelector("#app");
	  //const elementy = [];
	  for(const element of data){
		let description = document.createElement("p");  
		description.className="act_sky";
		description.textContent = element.weather.description;
		element.push(description);
		container?.appendChild(element);
	  }*/
	  /*for(const element of elementy){
		container?.appendChild(element);

	  }*/
	  /*for(const element of data){
		  let 
	  }

  }*/
  function spracujData(data: any) {
	
	const container = document.querySelector("#sky");
	
	let sky_d = document.createElement("d");
	sky_d.className="sky_d";
	sky_d.textContent= data[0].weather.description;
	container?.appendChild(sky_d);

	let crnt_time = document.createElement("t");
	crnt_time.className="crnt_time";
	crnt_time.textContent=data[0].timestamp_utc;
	const puttime = document.querySelector("#firstT");
	puttime?.appendChild(crnt_time);
	//
	let crnt_time1 =document.createElement("t1");
	crnt_time1.className="crnt_time1";
	crnt_time1.textContent=data[1].timestamp_utc;
	const puttime1 = document.querySelector("#secondT")
	puttime1?.appendChild(crnt_time1);

	/*let temp1 = document.createElement("temp");
	temp1.textContent=data[0].temp;
  
	const temp1container = document.querySelector('#firstT');
	temp1container?.appendChild(temp1);*/
	function spracujData(data:any ){
		let temp1 = document.createElement("temp");
					temp1.textContent=data[0].temp;
					  const temp1container = document.querySelector('#secondT');
					document.getElementById("firstT").value = temp1container;
		}
		  //document.getElementById("firstT").value = "abc";
		  const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '7151a85878mshb32875c0cba7e82p1de453jsn143e8109a919',
				'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
			}
		};fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
		.then(response => response.json())
		.then(response => 
			{console.log(response)
			spracujData(response.data)})
		.catch(err => console.error(err));
	


	
	
	

	


	

  }

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7151a85878mshb32875c0cba7e82p1de453jsn143e8109a919',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => 
		{console.log(response)
		spracujData(response.data)})
	.catch(err => console.error(err));
/*  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56ba64173fmshc7e71874c046f26p12d62ajsn8245ba17a524',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => 
		{console.log(response)
			spracujData(response.data)})
	.catch(err => console.error(err));*/
