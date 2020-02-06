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



//AB Scenario
//Using the original 'pets' array, use the .shift() array method and output the results.
petNames.shift();
console.log(petNames);
console.log(`The action taken was: Use the .shift() array method. \n The remaining data are: \n ${petNames}. `);

//Using the .unshift() array method, add the name 'Barney' to the petNames array.
//adds to the front of the array
petNames.unshift('Barney');
console.log(petNames);
console.log(`The action taken was: Add the name 'Barney'. \n The remaining data are: \n ${petNames}. `);

//Add the array below to the end of the petNames array to make a new array that you name allPets. 
//Show the new array in the output.
//Ted, Fred, Jed, Ned, Ed, Zed



//Using the array method .join(), create a string variable named stringPets 
//it holds all of the pet names separated by commas. That is, one big long string in this format:
//"Bob, Sam, Andy"



//Using the .unshift() array method, add the name 'Agnes' to the petNames array.




//When you are completely done coding and it all works perfectly, in GH Desktop create a Pull Request.




//Merge. GH will merge your branch (with your changes/commits) with the current master. 
//DONE!!