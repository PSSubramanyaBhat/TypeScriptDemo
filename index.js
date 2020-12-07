"use strict";
//A function that sort's an Array of Student objects...
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var students = [
    { name: 'Shripada', age: 34 },
    { name: 'Srivatsa', age: 22 },
    { name: 'Subba', age: 21 },
    { name: 'Mayur', age: 22 }
];
var aPhdStudent = {
    name: "Foo(phd)",
    age: 43,
    salary: 25000
};
var aStudent = {
    name: "John",
    age: 24
};
var tse = {
    name: "Subbu",
    age: 22,
    salary: 30000
};
function printObject(objet) {
    console.log("The name of the student is : ", objet.name);
    console.log("The salary is : ", objet.salary);
}
printObject(aStudent);
printObject(tse);
function sortByName(arr) {
    var copiedArr = __spreadArrays(arr);
    copiedArr.sort(function (first, second) {
        return first.name.localeCompare(second.name);
    });
    return copiedArr;
}
var sorted = sortByName(students);
var toBeGreeted = "World";
// let anInt = 10;
function greet(nameIn) {
    return "Hello " + nameIn.toUpperCase();
}
greet(toBeGreeted);
function createSquare(config) {
    // let newSquare = { color: "white", area: 100 };  //valid 1......
    // let newSquare : { color: string, area: number } = {color: "", area: 0}; //{ color: string; area: number };   //valid 2......
    // let newSquare: any = {}; //valid 3......
    var newSquare = { color: "", area: 0 }; //valid 4......
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 }; //Members are non changeable
// const p1: Point = { x: 10, y: 20 };  //variable itself is non changeable
var p1x = { x: 10, y: 20 }; //variable itself is non changeable
// p1.x = 5; // error!  //since its readonly...
p1x.x = 29;
// p1x =  p2x;
p1 = { x: 20, y: 15 };
function doSomething(config) {
    var color = config.color;
    var width = config.width;
    var someNotPresent = config.notPresent;
}
var someOtherConfig = { height: 100, radius: 30 };
doSomething(someOtherConfig);
// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// };
function Search(searchFunc) {
    return searchFunc("Wikepedia", "dia");
}
var myArray;
myArray = ["Bob", "Fred"];
// myArray["1"] = myArray[1]; // Apparently this is fine in typescript......
var myStr = myArray[0];
var square = {};
square.color = "blue";
square.sideLength = 10;
console.log(square);
