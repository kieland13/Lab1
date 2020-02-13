// Create an object. use JSON syntax to specify variables and their values
let user = {username : 'Nick', password : 'Animals'};

//add an email
user.email = 'nick@nick.com'

// Read Data
console.log(user.username) // prints Nick
console.log(user['password']) //Prints Animals
console.log(user.email) // Prints nick@nick.com

let webClass = { name : 'Web client server', code : 2560, room : 'T.3050'}

let className = webClass.name
let classnameAgain = webClass['name']

webClass.room = 'T.3050'
console.log(webClass)
webClass.studentsEnrolled = 27

console.log(webClass)

let dreamJob = ['Videogame Developer', 'Drink beer']
user.dreamJob = dreamJob
console.log(user)