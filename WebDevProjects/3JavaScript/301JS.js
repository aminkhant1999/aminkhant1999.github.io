//name characterization
var name = "tyleR";
name = name.toLowerCase();
var finalName = name.slice(0, 1).toUpperCase(); // var firstChar = name.charAt(0).toUpperCase();
alert ("Hello, " + finalName + "!" ); //Hello, Tyler!



//dog age calculator
var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21; // this is the formula to convert dog years to human years
alert("Your dog is " + humanAge + " years old in human years!");



//get milk function
function getMilk(money) {
    alert("You get " + Math.floor(money / 1.5) + " bottles of milk.");
}
getMilk(prompt("How much money do you have?")); 


//age left in days, weeks, months calculator (from average life expectancy of 90 years
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}
lifeInWeeks(prompt("What is your current age?"));



//get milk function with change
function getMilk(money) {
    alert("You get " + calcBottles(money, 1.5) + " bottles of milk.");
    alert("Your change is $" + calcChange(money, 1.5));
}
function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle) {
    var change = (startingAmount % costPerBottle).toFixed(2);
    return change;
}
getMilk(prompt("How much money do you have?"));


//get milk function with change (simplified)
function getMilk(money) {
    alert("You get " + Math.floor(money / 1.5) + " bottles of milk."); //number of bottles
    alert("Your change is $" + (money % 1.5).toFixed(2)); //change
}
getMilk(prompt("How much money do you have?"));



//bmi calculator
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2); // var bmi = weight / (height * height);
    return Math.round(bmi);
}
var bmi = bmiCalculator(prompt("Enter your weight in kg:"), prompt("Enter your height in meters:"));



//random number generator between 1 and 6 (simulating a dice roll)
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1; //to get a number between 1 and 6, we add 1
alert(n);

//random number generator between 1 and 6 (simulating a dice roll) (simplified)
alert(Math.floor(Math.random() * 6) + 1);



//love calculator
prompt("What is your name?");
prompt("What is your partner's name?");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%. You love each other like Kanye loves Kanye.");
} else if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%.");
} else {
    alert("Your love score is " + loveScore + "%. You go together like oil and water.");
}   



//same value and type vs same value only
var a = 1;
var b = "1";

typeof(a); //number
typeof(b); //string

if (a === b) { //false because it checks value and type
    console.log("same value and type");
} 
if (a == b) { //true because it only checks value
    console.log("same value");  
}



//bmi calculator with interpretation
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2); // var bmi = weight / (height * height);
    if (bmi < 18.5) {
        return ("Your BMI is " + Math.round(bmi) + ", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return ("Your BMI is " + Math.round(bmi) + ", so you have a normal weight.");
    } else {
        return ("Your BMI is " + Math.round(bmi) + ", so you are overweight.");
    }
}
var bmi = bmiCalculator(prompt("Enter your weight in kg:"), prompt("Enter your height in meters:"));
alert(bmi);



//leap year calculator
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        }
    }
}
isLeap(prompt("Enter a year:"));



//array
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList); //["Angela", "Jack", "Pam", "James", "Lara", "Jason"] 
console.log(guestList[2]); //Pam
console.log(guestList.length); //6
var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("You are not on the list.");
}



//fizzBuzz
var output = [];
var count = 1;
function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}
fizzBuzz(); //[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", ... , 100]


//fizzBuzz (alternative solution)
for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
        console.log("FizzBuzz");
    } else if (count % 3 === 0) {
        console.log("Fizz");
    } else if (count % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    }
}



//number of bottles of beer on the wall song
var bottles = 99;
while (bottles >= 0) {
    if (bottles > 1) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");
        console.log("Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
    } else if (bottles === 1) {
        console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    bottles--;
}



//fibonacci sequence
function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }
    return output;
}
fibonacciGenerator(10); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



//higher order functions and passing functions
function add(num1, num2) {
return num1 + num2;
}
 
function subtract(num1, num2) {
return num1 - num2;
}
 
function multiply(num1, num2) {
return num1 * num2;
}
 
function divide(num1, num2) {
return num1 / num2;
}
 
function calculator(num1, num2, operator) {
return operator(num1, num2);
}
