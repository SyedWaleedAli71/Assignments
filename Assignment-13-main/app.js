// Chapter 1 (Alerts)**

// Q.1
// alert("Syed Waleed");
// alert("Ali");
// alert("Email:" + " " + "Syedwaleed887@gmail.com");
// alert("Phone:"+ " " +"03122166216");
// secondMethod
// alert("Syed Waleed Ali\nEmail:" + " " + "Syedwaleed887@gmail.com\nPhone:"+ " " +"03122166216");

// Q.2
// alert("You'r Learng JavaScript!");

//Q.3
// alert("Hello Wolrd!\nWelcome to my Website");


// Chapter 2 (Variables for string)**

// Q.1
// var myName = "Syed Waleed Ali";
// alert(myName);

// Q.2
// var myName ;
// myName = "Waleed";
// alert(myName);

// Q.3
// var teamName = "Syed Waleed Ali\nSyed Zain Ali\nAimal Ghouri";
// alert(teamName);
// secondMethod
// var teamName1 = "waleed";
// var teamName2 = "Zain";
// var teamName3 = "Ali";
// var teamName4 = "Aimal";
// alert(teamName1+"\n"+teamName2+"\n"+teamName3+"\n"+teamName4);
// thirdMethod
// var name = "Waleed";
// var age = 22;
// var city = "Karachi";
// alert("Name: " + name + "\nAge: " + age + "\nCity: " + city);

// Q.4
// var betsMan = "Charlie";
// betsMan = "Waleed";       
// alert(betsMan);   



// ******************Chapter 3 (Variables for numbers)

// Q.1
// var caseQty;

// Q.2
// var caseQty;
// caseQty = 144;
// alert(caseQty);

// Q.3
// var num = 9;
// var num2 = 5;
// alert(num+num2);
// secondMethod
// var num = 9;    
// var num2 = num + 5;
// alert(num2); 

// Q.4
// var numBer ;
// numBer = 10 + 10;
// alert(numBer);
// secondMethod
// var numBer ;
// numBer = 10;
// numBer2 = 10;
// alert(numBer + numBer2);

// Q.5
// var numBer = 10;
// var numBer2 = 50;
// var total = numBer + numBer2;
// alert(total );

// Q.6
// var num = 50;
// newNum = num + 10;
// alert(newNum);

// *****************VARIABLE NAMES: LEGAL & ILLEGAL***************
// Q.1
// var name, age, country;
// var name = "Waleed", age = 22, country = "Pakistan";
// alert("My name is "+ name + "\nI am " + age + " years old and \nI live in "  + country + ".");
// console.log("My name is " + name + ", I am " + age + " years old and I live in " + country + ".");

// Q.2
// 5 Legal Variable Names**
// var userName;
// var age;
// var $price;
// var _id;
// var my1stVariable;
// 
// 5 Illegal Variable Names**
// var 1name;       
// var my name;     
// var @price;      
// var break;      
// var first-name;  


// Q.3
    // document.writeln("<h1>Rules for naming JS variables</h1>");

    // document.writeln("<p>Variable names can only contain letters, numbers, $ and _.</p>");
    // document.writeln("<p>For example: $my_1stVariable</p>");
    // document.writeln("<p>Variables must begin with a letter, $ or _.</p>");
    // document.writeln("<p>For example: $name, _name or name</p>");
    // document.writeln("<p>Variable names are case sensitive.</p>");
    // document.writeln("<p>Variable names should not be JS keywords.</p>");


    // **********************MATH EXPRESSIONS**********************
    // Q.1
    // var num1 = 10;
    // var num2 = 20;

    // var sum = num1 + num2;

    // alert(sum)
    // document.writeln("The sum of " + num1 + " and " + num2 + " is: " + sum);
    // alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
    // 

    // Q.2
    // var num1 = 15;
    // var num2 = 10;

    // var sum = num1 - num2;

    // // alert(sum)
    // document.writeln("The sum of " + num1 + " and " + num2 + " is: " + sum);
    // alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
// document.writeln("<h1>Rules for naming JS variables</h1>");

// document.writeln("<p>Variable names can only contain letters, numbers, $ and _.</p>");
// document.writeln("<p>For example: $my_1stVariable</p>");
// document.writeln("<p>Variables must begin with a letter, $ or _.</p>");
// document.writeln("<p>For example: $name, _name or name</p>");
// document.writeln("<p>Variable names are case sensitive.</p>");
// document.writeln("<p>Variable names should not be JS keywords.</p>");


// ***************************MATH EXPRESSIONS**********************
// Q.1
// var num1 = 10;
// var num2 = 20;

// var sum = num1 + num2;

// alert(sum)
// document.writeln("The sum of " + num1 + " and " + num2 + " is: " + sum);
// alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
// 

// Q.2
// var num1 = 15;
// var num2 = 10;
// var sum = num1 - num2;

// // alert(sum)
// document.writeln("The sum of " + num1 + " and " + num2 + " is: " + sum);
// alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
// 
// Q.3
// a.
// var num;
// // // b.
// document.writeln("Value after variable declaration is: " + num + "<br>");
// // // c.
// num = 5;
// // // d.
// document.writeln("Initial value is: " + num + "<br>");

// // // e.
// num++;
// // // // f.
// document.writeln("Value after increment is: " + num + "<br>");

// // // // g.
// num = num + 7;
// // // // h.

// document.writeln("Value after addition is: " + num + "<br>");

// // // i.

// num--;
// // // j.
// document.writeln("Value after decrement is: " + num + "<br>");

// // // k.
// var remainder = num % 3;
// // // l.
// document.writeln("The remainder is: " + remainder + "<br>");


// Q.4
// var ticketPrice = 600;
// var totalTickets = 5;

// var totalCost = ticketPrice * totalTickets;

// document.writeln("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + " PKR");

// Q.5
// var tableNum = 4;

// document.writeln("Table of " + tableNum + "<br>");
// for(var i=1; i<=10; i++){
//     var result = tableNum * i;
//     document.writeln(tableNum + " x " + i + " = " + result + "<br>");
// }

// Q.6
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;

// document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");

// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;

// document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C<br>");


// Q.7
// var item1Price = 650;
// var item2Price = 100;
// var item1Qty = 3;
// var item2Qty = 7;
// var shippingCharges = 100;

// var totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

// document.writeln("<h1>Shopping Cart</h1><br>");
// document.writeln("Price of item 1 is " + item1Price + "<br>");
// document.writeln("Quantity of item 1 is " + item1Qty + "<br>");
// document.writeln("Price of item 2 is " + item2Price + "<br>");
// document.writeln("Quantity of item 2 is " + item2Qty + "<br>");
// document.writeln("Shipping Charges " + shippingCharges + "<br><br>");
// document.writeln("Total cost of your order is " + totalCost + " PKR");

// Q.8

// var totalMarks = 980;
// var marksObtained = 804;

// var percentage = (marksObtained / totalMarks) * 100;

// document.writeln("<h1>Marks Sheet</h1><br>");

// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + marksObtained + "<br>");
// document.writeln("Percentage: " + percentage + "%<br>");

// Q.9
// var dollEr = 10;
// var pKr = 104.80;

// var mulTiplyDollEr = dollEr * pKr;
// //  alert(mulTiplyDollEr);
// var riyAl = 25;
// var pKr2 = 28;

// // alert(riyAl * pKr2); 
// var totalCurrencyInPKR = mulTiplyDollEr + (riyAl * pKr2);
// alert("Total Currency in PKR: " + totalCurrencyInPKR);

// Q.9 advanced method
// var totalPKR = (10 * 104.80) + (25 * 28);
// document.writeln("Total Currency in PKR: " + totalPKR);
// 

// Q.10
// var num = 10;
// var result = ((num + 5) * 10) / 2;
// alert("The final result is: " + result);
// 
// Q.11
// var currentYear = 2024;
// var birthYear = 2001;

// var age = currentYear - birthYear;

// document.writeln("<h1>Age Calculator</h1><br>");
// document.writeln("Current Year: " + currentYear + "<br>");
// document.writeln("Birth Year: " + birthYear + "<br>");
// document.writeln("Your Age is: " + age + "<br>");
//

// Q.12
// var radius = 20;

// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.writeln("<h1>The Geometrizer</h1><br>");
// document.writeln("Radius of a circle: " + radius + "<br>");
// document.writeln("The circumference is: " + circumference + "<br>");
// document.writeln("The area is: " + area + "<br>");

// Q.13
// var favSnack = "Chocolate Chip";
// var currentAge = 22;
// var maxAge = 65;
// var estAmountPerDay = 3;

// var totalNeeded = (maxAge - currentAge) * estAmountPerDay;

// document.writeln("<h1>The Lifetime SupplyCalculator</h1><br>");
// document.writeln("Favourite Snack: " + favSnack + "<br>");
// document.writeln("Current Age: " + currentAge + "<br>");
// document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
// document.writeln("Amount of snacks per day: " + estAmountPerDay + "<br>");
// document.writeln("You will need " + totalNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");


// 
// ******************************MATH EXPRESSIONS********************************

// Q.1
// var num = 10;
// var result = ((num + 5) * 2) / 3;
// ((10 + 5=15)*2=30)/3=10;
// document.writeln("The final result is: " + result);

// Q.2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// --a = 1
// --a - --b = 1 - 0 = 1
// --a - --b + ++b = 1 + 1 = 2
// --a - --b + ++b + b-- = 2 + 1 = 3
// document.writeln("The final result is: " + result);
//


// Q.3
// var userName = prompt("Enter your name:");
// alert("Welcome " + userName + "!");
//


// Q.4
// Q.5
// var num = prompt("Enter a number for multiplication table:");

// num = num || 5;

// document.writeln(num +"x 1 = " + num * 1 + "<br>");
// document.writeln(num +"x 1 = " + num * 2 + "<br>");
// document.writeln(num +"x 1 = " + num * 3 + "<br>");
// document.writeln(num +"x 1 = " + num * 4 + "<br>");
// document.writeln(num +"x 1 = " + num * 5 + "<br>");
// document.writeln(num +"x 1 = " + num * 6 + "<br>");
// document.writeln(num +"x 1 = " + num * 7 + "<br>");
// document.writeln(num +"x 1 = " + num * 8 + "<br>");
// document.writeln(num +"x 1 = " + num * 9 + "<br>");
// document.writeln(num +"x 1 = " + num * 10 + "<br>");

// Q.6

// 
// var subject1 = prompt("Enter first subject name:");
// var subject2 = prompt("Enter second subject name:");
// var subject3 = prompt("Enter third subject name:");

// var totalMarks = 100;

// var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
// var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
// var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

// var totalObtained = obtained1 + obtained2 + obtained3;
// var grandTotal = totalMarks * 3; 
// var percentage = (totalObtained / grandTotal) * 100;

// document.writeln("<h2>Mark Sheet</h2>");

// document.writeln(subject1 + " — Obtained: " + obtained1 + " / 100<br>");
// document.writeln(subject2 + " — Obtained: " + obtained2 + " / 100<br>");
// document.writeln(subject3 + " — Obtained: " + obtained3 + " / 100<br><br>");

// document.writeln("<b>Total Marks:</b> " + grandTotal + "<br>");
// document.writeln("<b>Total Obtained:</b> " + totalObtained + "<br>");
// document.writeln("<b>Percentage:</b> " + percentage.toFixed(2) + "%");


