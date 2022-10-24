import './style.css'
import './gulky.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML =`
<div class="Block">
<div class="DivInput">
<input placeholder="Enter a location..." class="inputek" type="search" id="maininput()"> </input>
<input type="submit" value="Submit" onclick="SecondState()"</input>
</div>
</div>



`
function maininput(){

}

function SecondState() {
	document.getElementById("maininput()").onsubmit();

  }
/*nejaké mesto(list - databáza s mestami) a nastaviť mu propertu;
 vytvoriť fciu či metódu ktorá nam získa info z ’options’; 
 "mestu" sa nastavia Naše parametre;
 (nasleduje nastavenie vykreslovania Našich parametrov) ; 
  ..... */ 



  
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