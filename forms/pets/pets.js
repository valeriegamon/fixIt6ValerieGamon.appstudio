let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']; 
let withMarmaduke = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Marmaduke']

console.log(petNames.length);
console.log(withMarmaduke.length);


//remove "Vinny" from the array
let removeVinny = petNames.splice(5, 1);
console.log(petNames.length);


//remove "Marty" from the array.
let removeMarty = petNames.splice(3, 1);
console.log(petNames.length);


//add "Nancy" to the front of the array.
petNames.unshift('Nancy');
console.log(petNames.length);


//add their name to the end of the array.
petNames.unshift('Val');
console.log(petNames.length);