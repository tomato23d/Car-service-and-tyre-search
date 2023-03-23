
const myMVE = [];

function getApi(){
var requestUrl = 'https://car-api2.p.rapidapi.com/api/bodies?sort=id&verbose=yes&direction=asc'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0bbb66a4edmsh6571cc8b8615294p1e0c41jsnb401a5d2aef0',
		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
	    },
  
        };


    fetch(requestUrl, options)
	.then(response => response.json())
    
	.then(function(collection){console.log(collection)})
	.catch(err => console.error(err));

   //const myMVE1 = myMVE.concat(data);
  // console.log(myMVE1);
   for (var i=0; i < data.length; i++){
     console.log(data[i])}
   
        var h5 = document.createElement('h5');
        var par = document.createElement('p');

        h5.textContent = collection.data[i].cargo_capacity;
        par.textContent = collection.data[i].wheel_base;

        container.appendChild(h5);
        container.appendChild(par);

} 
     

//showData.addEventListener('click', getApi);