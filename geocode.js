// Get location form
var locationForm = document.getElementById('location-form');

// Listen for submit (when user clicks button)
locationForm.addEventListener('submit', geocode);

function geocode(e){
  // Prevent actual submit until location information has been filled

  e.preventDefault();

  var location = document.getElementById('location-input').value;

  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params:{
      address:location,
      key:'AIzaSyARv3XGy6cc3LrzKS6ai0YPzp8Jlgnmy3g'
    }
  })
  .then(function(response){
    // Log full response
    console.log(response);

    // Formatted Address
    var formattedAddress = response.data.results[0].formatted_address;
    var formattedAddressOutput = `
      <ul class="list-group">
        <li class="list-group-item">${formattedAddress}</li>
      </ul>
    `;

    // Address Components
    var addressComponents = response.data.results[0].address_components;
    var addressComponentsOutput = '<ul class="list-group">';
    for(var i = 0;i < addressComponents.length;i++){
      addressComponentsOutput += `
        <li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>
      `;
    }
    addressComponentsOutput += '</ul>';

    // Geometry
    var lat = response.data.results[0].geometry.location.lat; 
    var lng = response.data.results[0].geometry.location.lng;
    var geometryOutput = `
      <ul class="list-group">
        <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
        <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
      </ul>
    `;

    // Output to app
//        document.getElementById('formatted-address').innerHTML = formattedAddressOutput; // testing
//        document.getElementById('address-components').innerHTML = addressComponentsOutput; // testing
    document.getElementById('geometry').innerHTML = geometryOutput;
    loadPlace(lat,lng)
  })
  .catch(function(error){
    console.log(error);
  });
}
