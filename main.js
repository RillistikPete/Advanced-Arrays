console.log("main.js");

var colors = ["red", "blue", "green", "orange", "teal"];

colors.forEach(function(item){
	var newColorString = "I like this color; " + item;
	console.log(newColorString);
})

//SAME AS ^^

for (var i = 0; i < colors.length; i++){
	var newColorString = "I like this color; " + colors[i];
	console.log(newColorString);
}

/// ARRAY.PROTOTYPE.MAP ---

var reversedColors = colors.map(function(color){
	return color.split("").reverse().join("");
})

console.log("reversedColors", reversedColors);

//COLOR IS REFERRING TO ONE OF THE ITEMS IN THE INDEX (ONE ITEM IN THE ARRAY)--
var fourLetters = colors.filter(function(color){
	return color.length === 4;
});

console.log("fourLetters", fourLetters);

//_____________________________________________
var numbers = [51, 40, 4, 98, 3];

var sum = numbers.reduce(function(prev, current){
	console.log(prev, current);
	return prev + current;
})
console.log("sum", sum);



var integers = [13, 25, 4, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
//Sort in descending order, remove any number greater than 19, multiply remaining numbers by 1.5 and then subtract 1,
//output the sum of all resulting numbers.

//This used functions inside, instead of renaming each function like i did in method chaining exercise...
var newIntegers = integers.sort()
.sort(function(a, b){
	return a - b})
.reverse()
.filter(function(num){
	return num < 19})
.map(function(value){
	return (value * 1.5) - 1})
.reduce(function(a, b){
	return a + b});

console.log(newIntegers);






