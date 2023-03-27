var showData = document.getElementById("search-api");

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
    
	.then(function(collection)
    {console.log("collection1",collection)

    console.log("collection2", collection)
    for (var i=0; i < collection.length; i++){
      console.log(collection[i])}
    
         var h5 = document.createElement('h5');
         var par = document.createElement('p');
 
         h5.textContent = collection.data[i].cargo_capacity;
         par.textContent = collection.data[i].wheel_base;
 
         container.appendChild(h5);
         container.appendChild(par);
}
    )
	.catch(err => console.error(err));

   //const myMVE1 = myMVE.concat(data);
  // console.log(myMVE1);

console.log("collection3", collection)

} 
     

showData.addEventListener('click', getApi);