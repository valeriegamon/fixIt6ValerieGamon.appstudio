let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']; 
let withMarmaduke = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Marmaduke']


//just to check the arrays and what is in them
console.log(petNames);
console.log(withMarmaduke);

//remove "Vinny" from the array
let removeVinny = petNames.splice(5, 1);
console.log(petNames);
console.log(`The action taken was: Remove "Vinny." \n The remaining data are: \n ${petNames}. `);


//remove "Marty" from the array.
let removeMarty = petNames.splice(3, 1);
console.log(petNames);
console.log(`The action taken was: Remove "Marty." \n The remaining data are: \n ${petNames}. `);

//add "Nancy" to the front of the array.
petNames.unshift('Nancy');
console.log(petNames);
console.log(`The action taken was: Add "Nancy" to the front of the array. \n The remaining data are: \n ${petNames}. `);

//add their name to the end of the array.
petNames.push('Val');
console.log(petNames);
console.log(`The action taken was: Add "Val" to the end of the array. \n The remaining data are: \n ${petNames}. `);

//tell the user the array index where "Riley" is located in the array.
alert(petNames.indexOf('Riley'));
console.log(petNames.indexOf('Riley'));
console.log(`The action taken was: "Tell user where Riley is located in the array." \n Riley is located in spot # ${petNames.indexOf('Riley')}`);

//tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array.
alert(petNames.indexOf('Cindy'));
console.log(petNames.indexOf('Cindy'));
console.log(`The action taken was: "Tell user where Cindy is located in the array." \n Cindy is located in:  ${petNames.indexOf('Cindy')}`);

//show the 'withMarmaduke' array data.
console.log(withMarmaduke);