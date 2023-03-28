var showData = document.getElementById("search-api");
var container = document.getElementById("container");
var tableBody = document.getElementById("fetch-results");


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
    {console.log("collection1",collection);


        for (var i=0; i < 99; i++){
        console.log(collection.data[i])

        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        link.textContent = "Capacity :" + collection.data[i].cargo_capacity + " Curb weight : "+ collection.data[i].curb_weight+
        " Car length : "+ collection.data[i].length+" Car height : "+ collection.data[i].height +" Car width : "+ collection.data[i].width +
        " Wheel measures : "+ collection.data[i].wheel_base +" Number of doors : "+ collection.data[i].doors;
 
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        }
}
)
//.catch(err => console.error(err));
} 
showData.addEventListener('click', getApi);