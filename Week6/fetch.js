//Create a url for the website where we will be pulling info from
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

//connect our variables to the Ids on the HTML page
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let maxFailedAttempts = 3

//Create an icon for the ISS station to show up on map
var icon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 50],
    iconAnchor: [25,25],
})

var issMarker  // Leaflet marker
var update = 10000 // to seconds

let map = L.map('iss-map').setView([0, 0], 1) // Center at 0, 0 and max zoom out
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 7,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1Ijoia2llbGFuZDEzIiwiYSI6ImNrNmxpbGE5NjBma3kzbXU5YjVvaGFzMHIifQ.lVDflkXQBuaWyf7mFP_gjQ'
}).addTo(map)

iss(maxFailedAttempts)   // initial call to function
//setInterval(iss, update)    // Call the iss function every update seconds

//If there are too many errors and page cannot load, then post this message
function iss(attempts) {
    if (attempts <= 0 ) {
        console.log('Too many errors, abandoning requests to get ISS position.')
        return
    }


    //fetch the data of where the ISS is and update it to this page
fetch(url)
    .then( res => res.json() )
    .then( issData => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        if (!issMarker) {
            issMarker = L.marker([lat, long], {icon: icon}).addTo(map)    // create the marker
        } else {
            issMarker.setLatLng([lat, long])    // Already exists - move to new location
        }

        // Update the time element to the current date and time
        let date = new Date()
        document.getElementById("current-time").innerHTML = date.toUTCString();
        TimeRanges.innerHTML = date
    })
    .catch( err=> {
        console.log(err)
    })
    .finally( () => {
        setTimeout(iss, update, attempts)
    })

}
fetch(url)
    .then( (response) => {
        // Response contains JSON, but as a string
        console.log(response)
        //Convert JSON from a response into object
        // response.json() returns a promise
        // The result of the promise is handled in the
        // next then() block when the promise resolves
        return response.json()
    }).then( (data) => {
        // data is a javascript object
        // It's the resolved result of response.json()
        console.log(data)
        // do something with data here
    }).catch( (error) => {
        // If an error occurs, a promise is rejected
        // In this case, the catch runs
        // deal with errors here
        console.log('error!', error)
    })
