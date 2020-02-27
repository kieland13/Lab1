var canvas = document.getElementById('bridge-chart')
console.log(canvas)
var ctx = canvas.getContext('2d')

bridges = [
    {'bridgeName': 'Verrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447] },
    {'bridgeName': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783] },
    {'bridgeName': 'Mackinac Bridge', 'cityState': 'Mackinaw and St Ignace, MI', 'span': '1158.0', 'coordinates': [45.8174, -84.7278] },
    {'bridgeName': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067.0', 'coordinates': [40.8517, -73.9527] },
    {'bridgeName': 'Tacoma Narrows Bridge', 'cityState': 'Tacoma and Kitsap, WA', 'span': '853.44', 'coordinates': [47.2690, -122.5517] },
]


bridges.forEach( function(bridges) {
    let nameOfBridge = `${bridges.bridgeName}`
    let bridgeSpan = `${bridges.span}`

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge", "Golden Gate Bridge", "Mackinac Bridge", "George Washington Bridge", "Tacoma Narrows Bridge"],
        datasets: [{
            label: 'Length of Bridge (meters)',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
})