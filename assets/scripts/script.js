var btnSearchTyre = document.getElementById("search-tyre");
var container = document.getElementById("container");
var entryForm = document.getElementById("entry_form");

var entryCarMake = document.getElementById("input_make");
var entryCarModel = document.getElementById("input_model");
var entryCarYear = document.getElementById("input_year");


// var btnCarMake = document.getElementById("btn_make");
// var btnCarMake = document.getElementById("btn_model");
// var btnCarMake = document.getElementById("btn_year");

var getCarName = function(event){
event.preventDefault();

for (var i=0; i < carsTyres.length; i++){

var carName = entryCarMake.value.trim();
var carModel = entryCarModel.value.trim();
var carYear = Number(entryCarYear.value.trim());

const formRecord = [];
const tyreRecord = [];

formRecord.push(carName, carModel, carYear);
tyreRecord.push(carsTyres[i].make, carsTyres[i].model, carsTyres[i].year);


let carRecord = JSON.stringify(formRecord);
let tyreRecordJSON = JSON.stringify(tyreRecord);
//console.log(carRecord);

//console.log(tyreRecordJSON);

if (carRecord === tyreRecordJSON){
    var tyreR = carsTyres[i].tyre_measure;
    console.log("yes, your tyre: "+ carsTyres[i].tyre_measure);
    var h5 = document.createElement('h5');
    h5.textContent = "Your tyre fit : " +tyreR;
    container.appendChild(h5);
    };
}}

entryForm.addEventListener("submit", getCarName);
btnSearchTyre.addEventListener("click", getCarName);


    
           
