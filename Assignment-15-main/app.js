// ARRAYS
// Q.1
// var studentName = [];
// 
// 
// Q.2
// var studentName = Array();

// var city = "karachi";
// var city1 = "Hyderabad";
// var city2 = "Lahore";
// var city3 = "Islamabad";

// alert("Welcome to" +" "+city3);
//  var cities = ["karachi", "lahore","Islamabad","hyderabad"];

//  alert("Welcome To " + " " + cities[0])

// 
// Q.3
//  var cities = ["karachi", "lahore","Islamabad","hyderabad"];
// 
// Q.4
// var numBers = ["10","20","30","40","50"];
// alert(numBers[0]);
// alert(numBers[1]);
// alert(numBers[2]);
// 
// Q.5
// var booleanArray = [true, false, true, false];
// 
// Q.6
// var mixedArray =["Waleed",23, true, "Ali",22, false];
// 
// Q.7
// var qualification = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil.","PHD"];
// console.log(qualification);
// document.writeln(qualification);
// 
// Q.8
// var students = ["Syed","Waleed","Ali"];

// var scores = [320, 230, 480];
// var totalMarks = 500;

// document.writeln("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0] / totalMarks * 100) + "%<br>");
// document.writeln("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1] / totalMarks * 100) + "%<br>");
// document.writeln("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2] / totalMarks * 100) + "%<br>");
// 
// Q.9
// var color = ["Red","Black","Blue","White","Yellow"];

// document.writeln("Color in The Array.."+ "<br>" + color);
// A.
// var userColor = prompt("Konsa color aap beginning me add karna chahte hain.");

// alert(userColor)
// 
// var colors = ["Red", "Green", "Blue"];

// document.writeln("Initial Colors Array: " + "<br>" + colors + "<br>");

// var userColor = prompt("Which color do you want to add at the beginning?");

// colors.unshift(userColor);

// document.writeln("Updated Colors Array: " + "<br>" + colors);
// 
// A.

// var city = ["karachi","lahore","quetta","islamabad","multan" + "<br>" ];

// document.writeln(city);

// var userCity = prompt("Which City do you want to add the begnning " + "<br>" )


// city.unshift(userCity)
// document.writeln("Updated City Array : " + "<br>" + userCity)

// B.
// var colors = ["Red", "Green", "Blue"];

// document.writeln("Initial Colors Array: " + "<br>" + colors + "<br>");

// var userColor = prompt("Which color do you want to add at the end?");

// colors.push(userColor);

// document.writeln("Updated Colors Array: " + "<br>" + colors);
// 
// C.
// var colors = ["Red", "Green", "Blue"];

// document.writeln("Initial Colors Array: " + "<br>" + colors + "<br>");

// var userColor = prompt("Which color do you want to add at the beginning?");

// colors.unshift(userColor);

// var userColor = prompt("Which color do you want to add at the beginning?");

// colors.unshift(userColor);

// document.writeln("Updated Colors Array: " + "<br>" + colors);
// 
// D.
// var colors = ["Red", "Green", "Blue"];

// document.writeln("Initial Colors Array: " + "<br>" + colors + "<br>");
 
// var userColor = prompt("Which color do you want to Delete at the beginning?");

// colors.shift(userColor);

// document.writeln("Updated Colors Array: " + "<br>" + colors);
// 
// E.
// var colors = ["Pink", "Purple", "Red", "Green", "Blue"];

// colors.pop();

// document.writeln("Updated Colors Array: " + colors);
// 
// F.
// var colors = ["Red", "Green", "Blue"];

// var index = +prompt("Kis index par color add karna hai?");

// var colorName = prompt("Konsa color add karna hai?");

// colors.splice(index, 0, colorName);

// console.log("Updated Colors Array: " + colors);
// 
// G.
// var colors = ["Red", "Yellow", "Green", "Blue", "Purple"];

// var index = +prompt("Kis index se colors delete karna hai?");

// var count = +prompt("Kitne colors delete karne hain?");

// colors.splice(index, count);

// console.log("Updated Colors Array: " + colors);
// 
// Q.10
// var scores = [320, 230, 480, 120];

// scores.sort(function(a, b){
//     return a - b;
// });

// console.log("Sorted Scores: " + scores);
// 
// Q.11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// var selectedCities = cities.slice(0,3);

// document.writeln("Cities Array : " + cities + "<br>");
// document.writeln("Selected Cities : "+ selectedCities);
// 
// Q.12
// var arr = ["This ", " is " ,"My" ,"Cat"];
// var useJoin= arr.join("");
// document.writeln(useJoin);
// 
// Q.13
// var queue = [];

// queue.push("Apple");
// queue.push("Mango");
// queue.push("Banana");
// queue.push("Banana");
// queue.push("Banana");
// queue.shift();
// queue.shift();
// document.writeln(queue);
// 
// Q.14
// var queue = [];

// queue.push("Apple");
// queue.push("Mango");
// queue.push("Banana");
// queue.push("Banana");
// queue.push("Banana");
// queue.pop();
// queue.pop();
// queue.pop();
// document.writeln(queue);
// 
// Q.15
// var manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Hair"];

// document.writeln(manufacturers[0] + "<br>");
// document.writeln(manufacturers[1] + "<br>");
// document.writeln(manufacturers[2] + "<br>");
// document.writeln(manufacturers[3] + "<br>");
// document.writeln(manufacturers[4] + "<br>");
// document.writeln(manufacturers[5]);
