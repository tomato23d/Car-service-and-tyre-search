var showTitle = document.getElementById("fetch-title");
var tableBody = document.getElementById("fetch-results");
var container = document.getElementById("container");
//var showImage = document.getElementById("fetch-image");
//var printImage = document.getElementById("myimage");

const gallery = [];

function getApi(){
var requestUrl = 'https://api.github.com/orgs/nodejs/repos'


fetch(requestUrl)
//fetch('http://127.0.0.1:5501/assets/scripts/database.json')
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