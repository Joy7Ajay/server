//if statements
/*
if (condition){

}
else if(condition){

}
else{

}
*/
let age = 25
if (age == 25){
    console.log("age is correct");
}
else if(age == 26){
    console.log("above age");

}
else{
    console.log("age is incorrect");
}

let age1 = 25
if (age < 25){
    console.log("u are too young");
}
else if(age >= 25 &&age <= 30){
    console.log("about time");

}
else{
    console.log("u're old");
}
//for loop
/*
for (initialization,condition,increment){
    results
}

//while
inti
while(cond){
    results
    increment
}
*/
for (let countno = 0; countno <= 100; countno++) {
    console.log(countno);
}

//for in loop
//for(initialization in storage){
    //results
//}
let letters = ['a','b','c','d','e','f','g','h'];
for (let letter in letters) {
    //console.log(letter);
    console.log(letters[letter])
}
let fruits = ["mangoes","oranges"]
for (let k of fruits) {
    console.log(k)
}
for (let k in  fruits) {
    console.log(fruits[k])
}

//switch
/**
 * switich(param){
 * case:
 * break;
 * 
 * case:
 * break;
 * 
 * case:
 * break;
 * 
 * default:
 * }
 */

let season = "woo";
switch(season){
    case 'spring':
        console.log('')
        break;
    case 'summer':
        console.log('too hot')
        break;
    case 'autumn':
        console.log('autumn')
        break;
    case 'winter':
        console.log('winter')
        break;
    default:
    console.log('oops')
}