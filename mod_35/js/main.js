console.log("main.js loaded");

// var x = 15;
// var y = 3;

// var a = x + y;
// console.log(a);

// var b = x - y;
// console.log(b);

// var c = x / y;
// console.log(c);

// var d = x * y;
// console.log(d);

// // Shorthands for increasing and descreasing a number
// var e = 10;
// e++; // same as e = e + 1;
// console.log(e); // Logs 11

// e--;
// console.log(e); // Logs 10

// e += 10; // e = e + 10;
// console.log(e); // Logs 20

// e *= 5; // e = e * 5;
// console.log(e); // Logs 80


// // Integers and Floats
// var myInteger = 232;
// console.log(myInteger);
// console.log(typeof myInteger); // logs number

// var myFloat = 412.24;
// console.log(myFloat);
// console.log(typeof myFloat); // logs number


// // Parsing a String into an integer or float
// var integerValue = parseInt("2321.123");
// console.log(integerValue); // logs 2321
// var floatValue = parseFloat("2321.123");
// console.log(floatValue); // logs 2321.123

// var invalidResult = parseFloat("Gandalf");
// console.log(invalidResult); // logs NaN
// var invalidResult = parseInt("Summer of 69");
// console.log(invalidResult); // logs NaN


// var test = "5";
// console.log( test + 10 );


// var firstname = "Spongebob";
// var lastname = "Squarepants";

// var completename = firstname + lastname;
// console.log(completename);

// var completename = firstname + " " + lastname;
// console.log(completename);


// console.log(firstname.length); // 9
// console.log(lastname.length); // 11
// console.log(completename.length); // 21


// console.log( firstname.toUpperCase() ); 
// console.log( lastname.toLowerCase() ); 

// // Replacing
// var completename = completename.replace("Spongebob","Bobby");
// console.log(completename);

// // Getting a Character at an index
// console.log(firstname.charAt(3)); // n, since counting start with 0!
// console.log(firstname[3]); // n, since counting start with 0!

// // Checking if there is a specific content inside a string
// console.log(firstname.indexOf("bob")); // 6
// console.log(firstname.indexOf("Bobby")); // -1, therefore not found!
// console.log(completename.indexOf("Bobby")); // 0, therefore found in the beginning


// var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
// quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
// consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
// cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
// proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \
// World!"
// console.log(lorem);
// var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  World!"
// console.log(lorem);


var fruit = ["Kiwi", "Banana", "Apple", "Orange"];

// console.log(fruit);
// console.log(fruit[0]);

// console.log(fruit.length); // 4

// var numberOfFruit = fruit.length; // 4
// var lastIndex = numberOfFruit - 1; // 3
// console.log( fruit[lastIndex] ); // "Orange"

fruit.push("Blueberry");
// console.log(fruit);

// var poppedItem = fruit.pop();
// console.log(poppedItem);
// console.log(fruit);

// fruit.unshift("Blueberry"); // from beginning
// console.log(fruit);

// var first = fruit.shift(); // from beginning
// console.log(first, fruit);

// fruit.sort();
// console.log(fruit);
// fruit.reverse();
// console.log(fruit);

fruit.push('Mango');
// console.log(fruit.indexOf('Banana'));
// console.log(fruit.indexOf('Pineapple')); // -1
// console.log(fruit);


// console.log(fruit.join());
// console.log(fruit.join(" "));
// console.log(fruit.join("-"));
// console.log(fruit.join("::"));


// var firstname = "Frodo";
// var lastname = "Baggins";
// var age = 33;
// var IsFrodoAHobbit = true;

// //[fristname, lastname, age, ishobbit]
// var frodo = ["Frodo", "Baggins", 33, true];
// var aragorn = ["Aragorn", "Elessar", 87, false];




// var keyToLookAt = "firstname";
// console.log(frodo[keyToLookAt]);
// console.log(aragorn[keyToLookAt]);

// keyToLookAt = "age";
// console.log(frodo[keyToLookAt]);
// console.log(aragorn[keyToLookAt]);



// console.log(cast.length)
// console.log(cast[0].firstname);
// console.log(cast[1].firstname);

// console.table(cast);



// console.log(14 / 2);
// console.log(7 / 2);
// console.log(74 / 2);


// function logHalfOf(input) {
//     console.log( input / 2 );
// }

// logHalfOf(14);
// logHalfOf(7);
// logHalfOf(74);


// var hundert;

// function fullname(castmember) {
//   hundert = 100;
//   console.log(castmember.firstname + " " + castmember.lastname);
// }

// console.log(hundert);

// fullname(frodo);
// fullname(aragorn);

// console.log(hundert);



// function getAverage(number1, number2, number3) {
//   var sum = number1 + number2 + number3;
//   var average = sum / 3;
//   return average;
// }

// var myAverage = getAverage(34,19,24);
// console.log(myAverage);



// var x = 10;
// console.log( x == 9 );  // equal false
// console.log( x == 10 ); // equal true
// console.log( x === 10 ); // equal value and equal datatype 
// console.log( x < 100 ); // less
// console.log( x > 10 ); // more
// console.log( x >= 10 ); // more or equal
// console.log( x <= 11 ); // less or equal
// console.log( x != 9); // not equal value
// console.log( x !== 9); // not equal value and equal datatype



// if( firstname == "Frodo" ) {
//     console.log("Hello you Hobbit!"); 
// } else {
//     console.log("Hello you");
// }

// var result = (x < 10) ? "less then 10" : "more or equal to 10";

// var firstname = "firstname";
// // var result = (firstname) ? "hello" : "no";
// // console.log(result); // ? 


// switch(firstname) {
//     case "Frodo":
//         console.log("Hello you Hobbit!");
//         break;
//     case "Gandalf":
//     case "Saruman":
//         console.log("Hello Wizzard!");
//         break;
//     default:
//         console.log("Hello you!");
//         break;
// }

// if( firstname == "Frodo" ) {
//     console.log("Hello you Hobbit!");
// } else if (firstname == "Gandalf" || firstname == "Saruman") {
//     console.log("Hello Wizzard!");
// } else {
//     console.log("Hello you!");
// }

// for (i = 0; i < 10; i++) {
// 	console.log("Current Index: " + i);
// }

// for (i = 0; i < fruit.length; i++) {
//     console.log( fruit[i] );
// }

var frodo = {
	firstname : "Frodo",
	lastname : "Baggins",
	age : 33,
	isHobbit : true
}

var bilbo = {
	firstname : "Bilbo",
	lastname : "Baggins",
	age : 50,
	isHobbit : true
}
var samwise = {
	firstname : "Samwise",
	lastname : "Gamgee",
	age : 35,
	isHobbit : true	
}

var aragorn = new Object();
aragorn.firstname = "Aragorn";
aragorn.lastname = "Elessar";
aragorn.age = 87;
aragorn.isHobbit = false;

var fellowship = [frodo, bilbo, samwise, aragorn];


// for (i = 0; i < fellowship.length; i++) {
//     // console.log( fellowship[i].lastname );
// }

// var i = 10;
// while (i > 5) {
//     console.log("Number is: " + i );
//     i--;
// }



// var para = document.getElementById("hello");
// para.textContent = "hi!";

// var bullets = document.getElementsByClassName("blue");
// console.log(bullets);
// // bullets.textContent = "BLUE";

// for (var i = 0; i < bullets.length; i++) {
// 	bullets[i].textContent = "BLUE " + i;
// }

// var headlineOne = document.getElementsByTagName("h1");
// console.log(headlineOne);


// var bullets2 = document.querySelectorAll("#second .blue");
// console.log(bullets2);
// // bullets.textContent = "BLUE";

// for (var i = 0; i < bullets2.length; i++) {
// 	bullets2[i].textContent = "BERLIN " + i;
// }


/// 


/// Goal: Fellowship into table

// get data for the fellowship
var frodo = {
	firstname : "Frodo",
	lastname : "Baggins",
	age : 33,
	isHobbit : true
}

var bilbo = {
	firstname : "Bilbo",
	lastname : "Baggins",
	age : 50,
	isHobbit : true
}
var samwise = {
	firstname : "Samwise",
	lastname : "Gamgee",
	age : 35,
	isHobbit : true	
}

var aragorn = new Object();
aragorn.firstname = "Aragorn";
aragorn.lastname = "Elessar";
aragorn.age = 87;
aragorn.isHobbit = false;

// store data 
var fellowship = [frodo, bilbo, samwise, aragorn];


// appendtoTable

// loop through fellowship

// var table = document.getElementById("fellowship");

// function createTable(){
// 	for (var i = 0; i < fellowship.length; i++) {
// 		var member = fellowship[i];

// 		// create tablerow for each of them
// 		var tablerow = "<tr>\
// 		<td>" + i + "</td>\
// 		<td>" + member.firstname + "</td>\
// 		<td>" + member.lastname + "</td>\
// 		<td>" + member.age + "</td>\
// 		<td>" + member.isHobbit + "</td>\
// 		</tr>";

// 		// appending it..
// 		table.innerHTML += tablerow;
// 	}
// }

// function removeLast(){
// 	fellowship.pop();
// 	table.innerHTML = "";
// 	createTable();
// }

var fellowship = [frodo, bilbo, samwise, aragorn];

var table = $("#fellowship");

$.each(fellowship, function(index, fellow){

	var tablerow = $("<tr>");
	$("<td>").text(index).appendTo(tablerow);
	$("<td>").text(fellow.firstname).appendTo(tablerow);
	$("<td>").text(fellow.lastname).appendTo(tablerow);
	$("<td>").text(fellow.age).appendTo(tablerow);
	$("<td>").text(fellow.isHobbit).appendTo(tablerow);

	table.append(tablerow);

});
// createTable();



var starwarsCast = $("#starwarsCast");

$.getJSON("https://swapi.co/api/people",function(data){
	var cast = data.results;

	$.each(cast, function(index, castmember){

		console.log(castmember);

		switch(castmember.gender){
			case "male":
				var cardClass = "bg-primary";
				break;
			case "female":
				var cardClass = "bg-danger";
				break;
			default:
				var cardClass = "bg-info";
				break;
		}

		var div = $("<div>").addClass("col-4");
		var card = $("<div>").addClass("card").addClass(cardClass).appendTo(div);
		var cardBlock = $("<div>").addClass("card-block").appendTo(card);
		$("<h4>").addClass("card-title").text(castmember.name).appendTo(cardBlock);

		var cardText = $("<p>").addClass("card-text").appendTo(cardBlock);

		var dl = $("<dl>");
		$("<dt>").text("height:").appendTo(dl)
		$("<dd>").text(castmember.height).appendTo(dl)
		$("<dt>").text("mass:").appendTo(dl)
		$("<dd>").text(castmember.mass).appendTo(dl)
		$("<dt>").text("birth_year:").appendTo(dl)
		$("<dd>").text(castmember.birth_year).appendTo(dl)
		cardText.append(dl);


		starwarsCast.append(div);

	});
});





























