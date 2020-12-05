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
function sortByName(arr) {
    var copiedArr = __spreadArrays(arr);
    copiedArr.sort(function (first, second) {
        return first.name.localeCompare(second.name);
    });
    return copiedArr;
}
var sorted = sortByName(students);