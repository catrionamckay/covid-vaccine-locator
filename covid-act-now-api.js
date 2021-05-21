var act_now_request_url = 'https://api.covidactnow.org/v2/state/';
var api_key = '.json?apiKey=' + YOUR_API_KEY;


function getVaccineInfo(state){
  url = act_now_request_url + 'OR' + api_key
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.responseType = 'json';
  xhttp.onload = function() {
      var status = xhttp.status;
      var response = xhttp.response;
      if (status === 200) {
        console.log(response.actuals.vaccinationsCompleted);
        console.log(response.population);
        vaccination_rate = response.actuals.vaccinationsCompleted/response.population*100;
        console.log(vaccination_rate);
      } else {
        alert('error with api request url');
      }

    };
  xhttp.send();
}
