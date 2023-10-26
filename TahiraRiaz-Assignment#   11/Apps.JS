// Prompt the user for their country, city, and area


var country = prompt("Enter your country: ");
var city = prompt("Enter your city: ");
var area = prompt("Enter your area: ");

country = country.toLowerCase();

city = city.toLowerCase();

area = area.toLowerCase();


if (country === "pakistan" && city === "karachi" && area === "defence") {
    console.log("Welcome.");


} else {
    console.log("Invalid area.");
}



// // Prompt the user for their preference (tea or coffee)

// var userPreference = prompt("Do you prefer tea or coffee?");


// userPreference = userPreference.toLowerCase();


// if (userPreference === "tea") {
//     console.log("Here is your tea.");


// } else if (userPreference === "coffee") {
//     console.log("Here is your coffee.");

// } else {
//     console.log("Something went wrong.");
// }

// // Prompt the user for membership status and student status

// var Membership = prompt("Do you have a membership? (Yes/No)").toLowerCase();

// var Student = prompt("Are you a student? (Yes/No)").toLowerCase();



// if (Membership === "yes" || Student === "yes") {
//     console.log("You qualify for a discount.");


// } else {
//     console.log("Sorry, no discount for you.");
// }


// // Prompt the user for their age and whether they have a valid ID

// var userAge = parseInt(prompt("What is your age?"));

// var ValidID = prompt("Do you have a valid ID? (Yes/No)").toLowerCase();

// if (userAge > 18 && ValidID === "yes") {
//     console.log("You are eligible.");


// } else {
//     console.log("Sorry, you are not eligible.");
// }




// var fatherIsPaying = prompt("Is your father paying for the shopping? (Yes/No)").toLowerCase();

// var saleIsOn = prompt("Is there a sale? (Yes/No)").toLowerCase();


// if (fatherIsPaying === "yes" || saleIsOn === "yes") {

//     console.log("You will go shopping.");


// } else {
//     console.log("You will not go shopping.");
// }


// // Prompt the user for their age and car ownership status

// var userAge = parseInt(prompt("What is your age?"));

// var ownsCar = prompt("Do you own a car? (Yes/No)").toLowerCase();

// if (userAge > 17 && ownsCar === "yes") {
//     console.log("You can drive and you own a car.");


// } else {
//     console.log("You cannot drive a car.");
// }


// var dayNumber = parseInt(prompt("Enter a number (1-2) representing a day of the week:"));

// if (dayNumber === 1) {
//     console.log("Monday");

    
// } else if (dayNumber === 2) {
//     console.log("Tuesday");


// } else {
//     console.log("Invalid input. Please enter a number from 1 to 2.");
// }


// var userChoice = prompt("Choose a traffic light color (Red, Yellow, or Green):").toLowerCase();

// if (userChoice === "red") {
//     console.log("Stop! The light is red.");



// } else if (userChoice === "yellow") {
//     console.log(" Slow ! The light is yellow.");


// } else if (userChoice === "green") {
//     console.log("You can go. The light is green.");


// } else {
//     console.log("Invalid choice. Please choose Red, Yellow, or Green.");
// }

// var userDay = prompt("Enter a day of the week:").toLowerCase();


// if (userDay === "tuesday" || userDay === "sunday ") {
//     console.log("It's a weekday.");


// } else if (userDay === "tuesday" || userDay === "sunday") {
//     console.log("It's a weekend day.");


// } else {
//     console.log("Invalid input. Please enter a valid day of the week.");
// }


// var userAge = parseInt(prompt("Enter your age:"));

// if (userAge >= 0 && userAge < 13) {
//     console.log("You are a child.");


// } else if (userAge >= 13 && userAge < 18) {
//     console.log("You are a teenager.");


// } else if (userAge >= 18 && userAge < 65) {
//     console.log("You are an adult.");


// } else if (userAge >= 65 && userAge < 150) {
//     console.log("You are a senior.");


// } else {
//     console.log("Invalid age input.");
// }
