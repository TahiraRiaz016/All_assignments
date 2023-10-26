var x = 10;

if(x > 5 ){

document.write("X is Greater ")
}
else{

    document.write("X is Smaller")
}

// document.write("<br>");
// document.write("<br>");

// var x = 15;

// if(x > 30 ){

// document.write("X is Greater ")
// }
// else{

//     document.write("X is Smaller")
// }

// document.write("<br>");
// document.write("<br>");

// var name = "Tahira" 
// var gender = "female"

// if(gender == "female"){
//     document.write("Hello Mr." + name )

// }
// else{
//     document.write("Hello Miss." + name )
// }

// document.write("<br>");
// document.write("<br>");

// var name = "Tahira" 
// var gender = "Male "

// if(gender == "Male"){
//     document.write("Hello Mr." + name )

// }
// else{
//     document.write("Hello Miss." + name )
// }
///////// if  ///////////

let firstName = "Tahira"                      //single (= ) equal  value ko assign karta hai

// console.log(firstName)

if(firstName == "Tahira") {                 //Double  ( == ) equal value of compare karta hai
console.log("You are Good Teacher ") 
}                                           //Tahira == Tahira Print You are Good Teacher True

else if(firstName == "Ahmed"){               // agar firstName Ahmed hai tu print Yor are a Student

    console.log("Yor are a Student")
}

else{
    console.log("i don't know ")
}

///////// else if   ///////////

let lastName = "Ahmed" 

if(lastName == "Tahira") {                 
    console.log("You are Good Teacher ") 
    }                                           
    
    else if(lastName == "Ahmed"){              
    
        console.log("Yor are a Student")
    }
    
    else{
        console.log("i don't know ")
    }

///////// else   ///////////

    let gName = "Ayesha" 

if(gName == "Tahira") {                 
    console.log("You are Good Teacher ") 
    }                                           
    
    else if(gName == "Ahmed"){              
    
        console.log("Yor are a Student")
    }
    
    else{
        console.log("i don't know ")
    }

    let eggPrice = 28 

if(eggPrice < 29) {          // < less then sign         
    console.log("wow very cheap price") 
    }                                           
    
    else if(eggPrice > 20 ){     // > gerater then       
    
        console.log("its Going to sky rocket")
    }
    
    else{
        console.log("write correct value ")
    }

//     Question 1) : Write a program that checks if a number is even or
// odd. If it's even, print "Even," otherwise print "Odd."

// let num = prompt("Enter a number:");
// if (num % 2 === 0) {
// console.log("Even");
// }
// else {
// console.log("Odd");
// }

// Question 2) : Create a program that asks the user for their age and
// then determines if they are eligible to vote (age 18 or older). If
// eligible, print "You can vote," otherwise print "You cannot vote."

// let age = prompt("Enter your age:");
// if (age >= 18) {
// console.log("You can vote");
// } else {
// console.log("You cannot vote");
// }

// Question 3) : Create a program that asks the user for two numbers
// and determines which one is larger. Print the larger number

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

//  num1 = parseInt(num1)
//  num2 = parseInt(num2)

// if (num1 > num2) { // num1 5 num2 10
// console.log("The larger number is num1 :", num1);

// } 

// else {
// console.log("The larger number is num2:", num2);

// }

// Question 4): Write a JavaScript program that prompts the user to
// enter their gender as "male" or "female." If the gender is "female,"
// the program should display "Allowed," and if the gender is "male," it
// should display "Not Allowed.

// let gender = prompt("Enter your gender (male/female)")
// if (gender === "female") 

// {
// console.log("Gender is female. You are allowed.");
// } 

// else {
// console.log("Gender is not female. Males are not allowed.");
// }

// Question 5 ) : Write a JavaScript code snippet using the "if-else"
// statement to check if a variable temperature is greater than 30
// degrees Celsius. If the temperature is greater than 30, display an
// alert message saying "It's a hot day!" Otherwise, display an alert
// message saying "The weather is pleasant."

// let temperature= prompt("Assign a temperature value here")

// if (temperature > 30) 
// {
// alert("It’s a hot day!");

// } else {
// alert("The weather is pleasant");
// }

// Question 6) : Write a JavaScript code snippet that checks if a user
// is either an admin or a moderator. If the user is an admin or a
// moderator, display an alert message saying "Access granted."
// Otherwise, display an alert message saying "Access denied."

// let userType = prompt("Assign the user type (admin or moderator)") ;

// if (userType === "admin" || userType === "moderator") 
// {
// alert("Access granted.");
// }
//  else {
// alert("Access denied.");
// }

// Question 7) : Write a JavaScript code snippet to determine a
// student's grade based on their score.


// let score = prompt("Enter the score");

// if (score >= 90) 
// {
// alert("A");
// } 
// else if (score >= 80) 
// {
// alert("B");
// }
// else {
// alert("F");
// }


// Question 8) : Write a JavaScript program that takes a user's age as
// input. If the age is 18 or older, display "You are an adult," if the age
// is between 13 and 17 (inclusive), display "You are a teenager," and
// if the age is 12 or younger, display "You are a child."


// let age = prompt("Please enter your age:");

// if (age >= 18) 
// {
// console.log("You are an adult");
// } 
// else if (age >= 13 && age <= 17) 
// {
// console.log("You are a teenager");
// } 
// else {
// console.log("You are a child");
// }

// Question 9) : Write a JavaScript code snippet that determines
// whether a number is positive, negative, or zero.
// Use if, else if, and else statements to print one of the following
// messages:

// let num = prompt("Enter the Number");

// if (num > 0) 
// {
// console.log("Positive");
// }
//  else if (num < 0) 
//  {
// console.log("Negative");
// } 
// else {
// console.log("Zero");
// }


// Question 10) : Write a JavaScript code snippet that checks if it's
// raining and prints a message accordingly.


// let isRaining = prompt("Enter true or False");

// if (isRaining) 
// {
// console.log("It's raining, take an umbrella.");
// } 
// else {
// console.log("No need for an umbrella today.");
// }