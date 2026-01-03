// Assignment # 17 
// STRING METHODS 

// Q.1
// let firstName = prompt("Enter your First Name..");
// let lastName = prompt("Enter your Last Name..");

// let fullName = firstName + " " + lastName; 

// document.writeln("Hello.." + " " + fullName);
// 

// Q.2
// let userInput = prompt("Enter your Favorite Mobile Phone Model..");
// let length = userInput.length;  

// document.writeln("My Favorite Phone is :" + " " +userInput);
// 

// Q.3
// let text = "Pakistan";
// console.log(text.slice(-1));
// indexNo
// let word = "Pakistan";
// let indexNo = word.indexOf("n");

// console.log(indexNo);
// 

// Q.4
// let world = "Hello World";
// console.log("Last Index Word is .." + world.slice(9,-1));
// 
// let worldNo = "Hello World";
// let lastIndex = worldNo.lastIndexOf("l");
// console.log("Last Index No is .." + lastIndex)
// 

// Q.5
// let word = "Pakistani";
// let indexWord = word.slice(3,-5);
// let indexNo = word.indexOf("i");

// console.log(indexWord + " : " + indexNo);
// 
// let word = "Pakistani";
// let character = word.slice(3,-5);

// console.log("Character at index 3 is: " + character);

// 
// Q.6
// let firstName= prompt("Enter Your First Name..");
// let lastName = prompt("Enter your Last Name..");

// let fullName = firstName.concat(" ", lastName);

// alert("Hello.." + fullName);
// 

//Q.7 
// let city = prompt("Enter your City..");
// let updateCity = city.replace = prompt("Enter your Current City..");

// alert("Original City" + " " + city);
// alert("Replace City " + " " + updateCity);
// 
// let city = "Hyderabad";
// let updatedCity = city.replace("Hyder", "Islam");

// document.writeln("Original: " + city + "<br>");
// document.writeln("Updated: " + updatedCity);
// 

// Q.8
// let message = "Ali and Sami are best friends. They play Cricket and Football";
// let updateMess = message.replace(/and/g , "&");

// console.log(updateMess);
// 

// Q.9
// let str = "472";

// let num = Number(str);

// document.writeln("Value: " + num + "<br>");
// document.writeln("Type of str: " + typeof str + "<br>");
// document.writeln("Type of num: " + typeof num);
// 

// Q.10
// let userInput = prompt("Enter Your Name..").toUpperCase();
// console.log(userInput);
// 

// Q.11
// let userInput = prompt("Enter something");

// let lower = userInput.toLowerCase();

// let words = lower.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }

// let titleCase = words.join(" ");

// document.writeln("User Input: " + userInput + "<br>");
// document.writeln("Title Case: " + titleCase);
// 

// Q.12
// var num = 35.36;

// var str = num.toString();

// var result = str.replace(".", "");

// document.writeln("Original Number: " + num + "<br>");
// document.writeln("Result: " + result);
// 
