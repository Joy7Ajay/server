//single line comment
/**
 * multi line comment
 */

//

//const
const PI = 3.14;

console.log(PI);
//let
let no1=3
let no2 =5

//var
var no3 =6;
var name ='Grey'
function addnos() {
    let no4 =34;
    //console.log(no4);
    
}
//console.log(no4);

/**
 * datatypes
 */

//int
 var multiple = no3 * no2;
 console.log(multiple)

 console.log(no2+no1)

 //string
 let name1 = "con"
 let name2 = 'ann'
 let name3 = `sam`

 let welcome = `welcome back ${name1}`;
 console.log(welcome);
 console.log("welcome back"+""+ name2);
 console.log(name1.toUpperCase());
 console.log(name1.length);

 //booleans
 let isStudent = true;
 let isInHall = false;

 //logical operators
 console.log(isStudent&& isInHall);
 console.log(isStudent|| isInHall);

 //Arrays
 let fruits = ["mangoes","oranges"]
 console.log(fruits);

 fruits.push("apples");//apppending items to the array
 console.log(fruits);

 fruits.pop()
 console.log(fruits);

 //ojects = python dict
 let credentials = {
    "email": "sam@gmail.com",
    "password": "1234",
 }
 
 let signUp ={
    "email": "sam@gmail.com",
    "firstname": "Mark",
    "lastname": "Sams",
    "age": "20"

 }
 console.log(credentials);
 console.log(signUp);
 credentials["username"] = "luke";
 console.log(credentials);
 credentials["confirmpassword"] = 1234

 //comparison operators
 console.log(credentials.password==credentials.confirmpassword);// == same values(case sensitive)
 console.log(credentials.password===credentials.confirmpassword);// === same everything