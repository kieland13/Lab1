let searchButton = document.querySelector('#search')
let nameInput = document.querySelector('#name')
let resultsContainer = document.querySelector('#results')
let positionresults = document.querySelector('#positionResults')
let fheight = document.querySelector('#feetHeight')
let iheight = document.querySelector('#inchesHeight')
let weight = document.querySelector('#weight')
let team = document.querySelector('#teamResults')

let url = 'https://www.balldontlie.io/api/v1/players?search='

searchButton.addEventListener('click', function() {
    let name = nameInput.value
    let searchUrl = url + name
    resultsContainer.innerHTML = ''
    positionresults.innerHTML = ''
    fheight.innerHTML = ''
    iheight.innerHTML = ''
    weight.innerHTML = ''
    team.innerHTML = ''

    fetch(searchUrl).then( data => data.json()).then( json =>
        {
            let allPlayers = json.data
            if (allPlayers.length == 0) {
                resultsContainer.innerHTML = 'Sorry no results.'
            }
            else {
                allPlayers.forEach( player => {
                    let playerContainer = document.createElement('p')
                    let positionContainer = document.createElement('p')
                    let feetContainer = document.createElement('p')
                    let inchContainer = document.createElement('p')
                    let weightContainer = document.createElement('p')
                    let teamContainer = document.createElement('p')

                    playerContainer.innerHTML = `${player.first_name} ${player.last_name}`
                    resultsContainer.appendChild(playerContainer)

                    positionContainer.innerHTML = `${player.position}`

                    if (positionContainer.innerHTML.length == 0)
                    {
                        positionContainer.innerHTML = "-"
                    }

                    positionresults.appendChild(positionContainer)



                    feetContainer.innerHTML = `${player.height_feet}`

                    if (feetContainer.innerHTML == 'null')
                    {
                        feetContainer.innerHTML = "-"
                    }

                    fheight.appendChild(feetContainer)

                    inchContainer.innerHTML = `${player.height_inches}`

                    if (inchContainer.innerHTML == 'null')
                    {
                        inchContainer.innerHTML = "-"
                    }

                    iheight.appendChild(inchContainer)

                    weightContainer.innerHTML = `${player.weight_pounds}`

                    if (weightContainer.innerHTML == 'null')
                    {
                        weightContainer.innerHTML = "-"
                    }

                    weight.appendChild(weightContainer)

                    teamContainer.innerHTML = `${player.team.full_name}`
                    team.appendChild(teamContainer)

                })
            }
        })
})