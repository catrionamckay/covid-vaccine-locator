var vaccine_spotter_url = 'https://www.vaccinespotter.org/api/'
var VS_api_state = 'https://www.vaccinespotter.org/api/v0/states/'
var searchButton = document.querySelector("#search");
var stateCode = document.querySelector("#state-code")
var zipCode = document.querySelector("#zip-code")


var getStateInfo = function(url){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.responseType = 'json';
    xhttp.onload = function() {
        var status = xhttp.status;
        var response = xhttp.response;
        if (status === 200) {
          console.log(searchLocations(response.features, zipCode.value))
        } else {
          alert('error with api request url');
        }
      };
    xhttp.send();
};

searchButton.addEventListener("click", function getUserSearch(){
    var zipValue = zipCode.value;
    var stateValue = stateCode.value;
    var searchURL = VS_api_state + stateValue + '.json';
    getStateInfo(searchURL);
    getVaccineInfo(stateValue);
    displayCard();
});


function searchLocations(locations, zip){
  var zipLocations = []
  console.log(locations.length)
  for(i = 0; i < locations.length; i++){
    if(locations[i].properties.postal_code == zip){
      zipLocations.push(locations[i])
    }
  }
  return zipLocations
}

function addCard(provider, address, available, url) {
  if(provider)
  document.getElementById("cards").innerHTML += 
    "<div class='card mb-2 w-75'>" +
      "<div class='card-body'>" +
        "<h5 class='card-title'>" + provider + "</h5>" +
        "<li><span style='font-weight:bold'>Location: </span>" + address + "</li>" +
        "<li><span style='font-weight:bold'>Vaccines available: </span>" + available + "</li>" +
        "<li><span style='font-weight:bold'>Book and appointment: </span>" + url + "</li>" +
      "</div>" +
    "</div>";
}

function displayCard() {
  // use a for loop to loop through results and call addCard each time
  var provider = 'Spaghetti';
  var address = '21389 SW Some St. SimCity, SimState 23890';
  var available = 'No Vaccines available';
  var url = 'Safeway.com';
  
  addCard(provider + "1", address, available, url);
  addCard(provider + "2", address, available, url);
  addCard(provider + "3", address, available, url);
}