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
          locations = searchLocations(response.features, zipCode.value);
          addVaccineMarkers(locations)
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
