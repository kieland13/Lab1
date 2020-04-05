let searchButton = document.querySelector('#search')
let nameInput = document.querySelector('#name')
let resultsContainer = document.querySelector('#results')
let positionresults = document.querySelector('#positionResults')
let fheight = document.querySelector('#feetHeight')
let iheight = document.querySelector('#inchesHeight')
let teamresults = document.querySelector('#teamResults')

let url = 'https://www.balldontlie.io/api/v1/players?search='

searchButton.addEventListener('click', function() {
    let name = nameInput.value
    let searchUrl = url + name
    resultsContainer.innerHTML = ''
    positionresults.innerHTML = ''

    fetch(searchUrl)
        .then( data => data.json() )
        .then( json => {
            let allPlayers = json.data
            if (allPlayers.length == 0) {
                resultsContainer.innerHTML = 'Sorry no results.'
            }
            else {
                allPlayers.forEach( player => {
                    let playerContainer = document.createElement('p')
                    playerContainer.innerHTML = `${player.first_name} ${player.last_name}`

                    let positionContainer = document.createElement('p')
                    positionContainer.innerHTML = `${player.position}`
                    positionresults.appendChild(positionContainer)
                    
                    resultsContainer.appendChild(playerContainer)

                })
            }
        })
})