/*
Write a function called "countTotalBurgers", that takes an argument named "burgerObj".
"burgerObj" is an object.
The function "countTotalBurgers" should take the argument "burgerObj", and return the total number of burgers in "burgerObj"
If a value in "burgerObj" is array, it should add all elements in that array to total number of burgers.
If a value in "burgerObj" is number, it should add it to total number of burgers.
If a value in "burgerObj" is any other data type (String, boolean, etc) it should be ignored.
** hint: Array.isArray() function checks if target value type is array
** hint: type of value 5 is "number"
*/
//Example of burgerObj argument
var burgerObj = {
  "burgerBox1": [1,2,3],
  "burgerBox2": "hello",
  "burgerBox3": 5,
  "burgerBox4": false
}




//write your solution code below here
function countTotalBurgers(burgerObj) {
 // initialize total to 0
 var total = 0
 // iterate object and find key
 for (var key in burgerObj){
   // if value of object is array
   if (Array.isArray(burgerObj);
     //iterate through element in array
     for (var i = 0; i < burgerObj.length; i++)
       // add element and assignment to total
   // else if value of object is number
     //add the value to total
 // return total number of burger

}


console.log(countTotalBurgers(burgerObj));

//I: object
//O: total
//Create a place holder for the sum
//iterate over Array
 //if value of obj is arr add to total
//add elements of array
//return the sum

burgerObj[2]
