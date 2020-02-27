let usBridgeCoords = [41.2565, -95.6345]
let zoomLevel = 3

// let usBridgeCoords = [41.2565, -95.6345]
// let bridgeMarker = L.marker(usbridgeCoords)
// .bindPopup("Bridge name"<br>"Bridge location"<br>Span of bridge: "bridge span"
// .addTo(map)

let map = L.map('us-bridges').setView(usBridgeCoords, zoomLevel)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2llbGFuZDEzIiwiYSI6ImNrNmxpbGE5NjBma3kzbXU5YjVvaGFzMHIifQ.lVDflkXQBuaWyf7mFP_gjQ'
}).addTo(map)




bridges = [
    {'bridgeName': 'Verrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447] },
    {'bridgeName': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783] },
    {'bridgeName': 'Mackinac Bridge', 'cityState': 'Mackinaw and St Ignace, MI', 'span': '1158.0', 'coordinates': [45.8174, -84.7278] },
    {'bridgeName': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067.0', 'coordinates': [40.8517, -73.9527] },
    {'bridgeName': 'Tacoma Narrows Bridge', 'cityState': 'Tacoma and Kitsap, WA', 'span': '853.44', 'coordinates': [47.2690, -122.5517] },
]

bridges.forEach( function(bridges) {
    let bridgeLocation = `${bridges.cityState}`
    let nameOfBridge = `${bridges.bridgeName}`
    let bridgeSpan = `${bridges.span}`
    let bridgeMarker = L.marker(bridges.coordinates)
    .bindPopup(`${nameOfBridge}<br>${bridgeLocation}<br>Span of bridge:${bridgeSpan}`)
    .addTo(map)
})