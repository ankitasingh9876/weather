const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="7bd851f41aa8d4d1220642c55cf519d2";
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');

async function checkWeather(city)
{
	const res= await fetch (apiUrl+city +"&appid="+apikey);
	const d= await res.json()
	console.log(d);
document.querySelector('.temp').innerHTML=Math.round(d.main.temp);
document.querySelector('.city').innerHTML=d.name;
document.querySelector('.humidity').innerHTML=d.main.humidity;
document.querySelector('.wind').innerHTML=d.wind.speed;
}
function fun()
{
var city=document.querySelector('.search input').value;
checkWeather(city);
}


//alert("hii")