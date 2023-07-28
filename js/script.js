const requestURL =
  "https://dario-hesami.github.io/comp1073-JSON/js/i-scream.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  if (request.status === 200) {
    const jsonObj = request.response;
    console.log(jsonObj);
    populateHeader(jsonObj);
    topFlavors(jsonObj);
  } else {
    console.error("Error loading JSON data.");
  }
};

request.onerror = function () {
  console.error("Network error occurred. Failed to load JSON data.");
};

function populateHeader(jsonObj) {
  // Your existing code for populating the header
}

function topFlavors(jsonObj) {
  // Your existing code for populating the top flavors
}
