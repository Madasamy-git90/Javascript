// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data

// JSON syntax
// {
//     "name": "John",
//     "age": 22,
//     "gender": "male",

// }
//In JSON, the data are in key/value pairs separated by a comma ,.
// JSON Data
// JSON data consists of key/value pairs similar to JavaScript object properties. 
// The key and values are written in double quotes separated by a colon :. For example,
// JSON data
// "name": "John"
//JSON data requires double quotes for the key.

// JSON Object
// The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,
// // JSON object
// { "name": "John", "age": 22 }

// JSON Array
// JSON array is written inside square brackets [ ]. For example,

// // JSON array
// [ "apple", "mango", "banana"]

// // JSON array containing objects
// [
//     { "name": "John", "age": 22 },
//     { "name": "Peter", "age": 20 }.
//     { "name": "Mark", "age": 23 }
// ]

// Converting JSON to JavaScript Object

const jsonData = '{"name":"samy","age":"34"}';
console.log(jsonData);
const obj = JSON.parse(jsonData);
console.log(obj);
console.log(obj.name);
