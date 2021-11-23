// const xhr = new XMLHttpRequest();

// xhr.open('GET','https://randomuser.me/api/?results=10');

// xhr.responseType = 'json';

// xhr.onload = ()=>{
// 	const result  = xhr.response;
// 	console.log(result);
// 	for(const user of result.results){
// 		console.log(user.name.first);
// 	}
// }

// xhr.send();


// fetch('http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=5cd5799692e9625b7115ef06970bb8a6&units=metric')
// .then(response=>response.json()).then(result=>{
// 	console.log(result);
// 	alert(result.main.temp);
// });

async function getWeather() {
	const result = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=5cd5799692e9625b7115ef06970bb8a6&units=metric');
	const data = await result.json();
	console.log(data.main.temp);
}

getWeather();