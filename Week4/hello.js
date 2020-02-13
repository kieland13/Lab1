console.log('hello world')


let name = "Nick"

let letters = name.length

console.log(name)
// Write an if statement that checks if your name has more than 5 letters

if (letters > 5) {
    console.log("your name has more than five letters")
} else {
    console.log("Your name has less than five letters")
}

// make another variable to store another name
//check if this name has more than 10 letters

name = "Geronimo"
letters = name.length
console.log(name)
if (letters > 10) {
    console.log("your name has more than ten letters")
} else {
    console.log("Your name has less than ten letters")
}

let todayTemp = 37

// Write an if statement to print "above freezing" if it is above freezing (32F)
//and use else to print "below freezing" if it is below

if (todayTemp > 32) {
    console.log("Above freezing")
} else {
    console.log("Below Freezing")
}
function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    }
    return false
}

// Create an array
let trees = ['Fir', 'Sequoia', 'Maple']

// Loop over that array. print every tree
trees.forEach( function(tree) {
    console.log(tree)
})

// Where are you in the array?
trees.forEach( function(tree, index) {
    console.log(tree, index)
})
/*function cityStateAddress(city,state) {
    state = state.toUpperCase()
    address = city + ', ' + state
    return address
}
*/

function cityStateAddress(city, state) {
    state = state.toUpperCase()
    address = `${city}, ${state}`
    return address
}

address = cityStateAddress('Minneapolis', 'mn')
console.log(todayTemp)
console.log(validGPA(-1))
console.log(validGPA(0))
console.log(validGPA(3.5))
console.log(validGPA(4))
console.log(validGPA(10))
console.log(address)