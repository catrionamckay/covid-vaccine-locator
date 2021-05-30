function addCards(location, address, available, url) {
    document.getElementById("cards").innerHTML +=
      "<div class='card w-100 mb-2'>" +
        "<div class='card-body'>" +
          "<h5 class='card-title'>" + location + "</h5>" +
          "<ul>" +
            "<li>" + address + "</li>" +
            "<li>" + available + "</li>" +
            "<li><a href=" + url + ">" + url + "</a></li>" +
          "</ul>" +
        "</div>" +
      "</div>";
};
  
function loadCards(VaccineLocations) {
    var available;
    for(var i = 0; i < VaccineLocations.length; i++){
        var prefix = VaccineLocations[i].properties;
        if(prefix.appointments_available === true) {
            available = 'Vaccines Available';
        }
        else if(prefix.appointments_available === null) {
            available = 'Vaccine availability unknown';
        }
        else {
            available = 'Vaccines Unavailable';
        }
        let location = prefix.provider_brand_name;
        let address = prefix.address + ' ' + prefix.city + ' ' + 
                    prefix.state + '  ' + prefix.postal_code;
        let url = prefix.url;
        addCards(location, address, available, url);
    }
};