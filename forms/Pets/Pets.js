var petNames = ["Darcy", "Jack", "Marty", "Vinny", "Riley", "Sadie", "Marge", "Sam"]
var withSal = petNames
petNames.push("Sal")
console.log('The third pet is named' + ' ' + petNames[2])
let lengthpetName =petNames.length
console.log('The array has' + ' ' + lengthpetName + ' ' + 'names in it.')
var popped = petNames.pop()
console.log(petNames)