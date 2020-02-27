let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playAgainButton = document.querySelector("#play-again")
// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available




     

// TODO when the page loads, select an element at random from the countriesAndCodes array
// create arrays for the countriesAndCodes
let countryCode = []
let randomCountryName = []

load = update() // when the page loads, it will update the random country to the random country element

function update() {
    let randomCountry = countriesAndCodes[Math.floor(Math.random()*countriesAndCodes.length)] // this will select the random country and all its data
    let randomCountryAnswer = randomCountry.name   //this will display the name part fo the array from that country
    randomCountryElement.innerHTML = randomCountryAnswer    //displays the country in the element for random country
    countryCode.push(randomCountry['alpha-2'])  //push the country code to the country code array
    randomCountryName.push(randomCountry['name'])   //push the country code to the random country name array

// TODO display the country's name in the randomCountryElement 
}

submitButton.addEventListener("click", function() { //whenever the user clicks the submit button, this will happen:
    let answer = userAnswerElement.value    //creates a value for the user input
    let url = `https://api.worldbank.org/v2/country/${countryCode}?format=json` //creates a url with the country code of the random country

    fetch(url)      //calls the url stated above with random country code
    .then(res => res.json() )   //creates the function
    .then(countryData => {  
      let cityName = countryData[1][0]['capitalCity']       //creates the capital name form the API and stores it into the cityName variable
      console.log(cityName)
      if(answer.length == 0) {      //this is supposed to check if the user input is empty
          resultTextElement.innerHTML = `Please enter something in to guess the capital.`
      }
      if (answer.trim().toLowerCase() != cityName.toLowerCase()) {  //takes the answer and compares to see if it is right or not
          resultTextElement.innerHTML = `That is wrong. the Captial city of ${randomCountryName} is not ${answer}, it is actually ${cityName}.`
        }
        if (answer.trim().toLowerCase() == cityName.toLowerCase()) {    //takes the answer and compares to see if it is right or not
            resultTextElement.innerHTML = `Bingo! You got it right. The capital city of ${randomCountryName} is ${cityName}.`
        }
    })
    .catch( error => {
        console.log('error', error)
    })

    })
// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

//When user clicks play again button, it will re create a random country for user to guess the capital of
playAgainButton.addEventListener("click", function() {
    userAnswerElement.value = ""
    countryCode = []
    randomCountryName = []
    update()
    resultTextElement.innerHTML = 'Do you think you can guess the caiptal of this country?'
})
// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice.

