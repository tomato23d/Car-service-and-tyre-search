var showTitle = document.getElementById("fetch-api");
//var tableBody = document.getElementById("fetch-results");
//var container = document.getElementById("container");

var entryCarMake = document.getElementById("input_make");
var btnCarMake = document.getElementById("btn_make");

var entryCarMake = document.getElementById("input_model");
var btnCarMake = document.getElementById("btn_model");

var entryCarMake = document.getElementById("input_year");
var btnCarMake = document.getElementById("btn_year");


var getImportMake = "vegies";
var getImportModel = "sun";
var getImportYear = "2020";



const gallery = [];

var getCarName = function(event){
event.preventDefault();
var carName = entryCarMake.value.trim();

if (carName === getImportMake){console.log("yes")}
else {alert('Please enter a valid vegies')}
}


btnCarMake.addEventListener("click", getCarName);


function getApi(){
var requestUrl = 'https://api.github.com/users/tomato23d/repos'

//'https://api.github.com/orgs/nodejs/repos'


fetch(requestUrl)

    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for (var i=0; i < data.length; i++){
            var createTableRow = document.createElement('tr');
            var tableData = document.createElement('td');
            var link = document.createElement('a');

           link.textContent = data[i].html_url;
           link.href = data[i].html_url;

           //link.textContent = data[i].displayTitle;
           //link.href = data[i].media[0].medium.uri;
           
           //gallery.push(data[i].media[0].medium.uri);
           //console.log (gallery);
            

            tableData.appendChild(link);
            createTableRow.appendChild(tableData);
            tableBody.appendChild(createTableRow);

            //var h5 = document.createElement('h5');
            //var par = document.createElement('p');

           // h5.textContent = data[i].category;
           // par.textContent = data[i].collectionNames;

            //container.appendChild(h5);
           // container.appendChild(par);

         
        }
    });
}




showTitle.addEventListener('click', getApi);

//showImage.addEventListener('click', getApiImage);