var showData = document.getElementById("fetch-api");
var tableBody = document.getElementById("fetch-results");
var container = document.getElementById("container");
//var showImage = document.getElementById("fetch-image");
//var printImage = document.getElementById("myimage");

//const gallery = [];

function getApi(){
var requestUrl = 'https://car-api2.p.rapidapi.com/api/bodies?sort=id&verbose=yes&direction=asc'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0bbb66a4edmsh6571cc8b8615294p1e0c41jsnb401a5d2aef0',
		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
	},
    body: JSON.stringify(data)
};


fetch(requestUrl, options)
	.then(response => response.json())
   // .then(response => response(text))
	.then(function(data){console.log(data)})
	.catch(err => console.error(err));
console.log (text);
    //const myHeader = new Headers();

 //   for (var i=0; i < data.length; i++){
 //       console.log(data[i])}
 //   }

//           var createTableRow = document.createElement('tr');
//           var tableData = document.createElement('td');
//           var link = document.createElement('a');
       

//            link.textContent = data[i].wheel_base;
//           link.href = data[i].wheel_base;
           
           //gallery.push(data[i].media[0].medium.uri);
           //console.log (gallery);
            

          //   tableData.appendChild(link);
          //   createTableRow.appendChild(tableData);
          //   tableBody.appendChild(createTableRow);

    

          //   var h5 = document.createElement('h5');
          //   var par = document.createElement('p');

          //  h5.textContent = collection.data[i].cargo_capacity;
          //  par.textContent = collection.data[i].wheel_base;

          //  container.appendChild(h5);
          //  container.appendChild(par);

         
 

showData.addEventListener('click', getApi);