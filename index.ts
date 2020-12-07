//A function that sort's an Array of Student objects...

let students = [
    { name: 'Shripada', age: 34 },
    { name: 'Srivatsa', age: 22 },
    { name: 'Subba', age: 21 },
    { name: 'Mayur', age: 22 }
];

/** 
 * This is the description of the interface... 
*/
interface Student {
    /**This represents the name of the student... */
    name: string,
    /**This represents the age of the student... */
    age: number,
    salary?: number
}

let aPhdStudent: Student = {
    name: "Foo(phd)",
    age: 43,
    salary: 25000
}

let aStudent: Student = {
    name: "John",
    age: 24
}

interface Employee {
    name: string,
    age: number,
    salary: number
}

let tse: Employee = {
    name: "Subbu",
    age: 22,
    salary: 30000
}

function printObject(objet: Student) {
    console.log("The name of the student is : ", objet.name);
    console.log("The salary is : ", objet.salary);
}

printObject(aStudent);
printObject(tse);


function sortByName(arr: Student[]) {
    const copiedArr = [...arr];
    copiedArr.sort((first, second) => {
        return first.name.localeCompare(second.name);
    });
    return copiedArr;
}

const sorted = sortByName(students);

let toBeGreeted = "World";
// let anInt = 10;

function greet(nameIn: string) {
    return `Hello ${nameIn.toUpperCase()}`;
}

greet(toBeGreeted);
// greet(anInt);


/*interface Label {
    label: string
}*/

/*function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
}

printLabel({ label: "Some name" });*/


interface SquareConfig {
    color?: string;
    width?: number;
}


function createSquare(config: SquareConfig): { color: string; area: number } {
    // let newSquare = { color: "white", area: 100 };  //valid 1......
    // let newSquare : { color: string, area: number } = {color: "", area: 0}; //{ color: string; area: number };   //valid 2......
    // let newSquare: any = {}; //valid 3......
    let newSquare = { color: "", area: 0 }; //valid 4......

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };  //Members are non changeable
// const p1: Point = { x: 10, y: 20 };  //variable itself is non changeable

const p1x = { x: 10, y: 20 };   //variable itself is non changeable

// p1.x = 5; // error!  //since its readonly...
p1x.x = 29;

// p1x =  p2x;

p1 = { x: 20, y: 15 };


interface SquareConfigNew {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function doSomething(config: SquareConfigNew) {
    let color = config.color;
    let width = config.width;
    let someNotPresent = config.notPresent;
}

let someOtherConfig = { height: 100, radius: 30 };
doSomething(someOtherConfig);


interface SearchFunc {
    (source: string, subString: string): boolean;
}

// let mySearch: SearchFunc;

// mySearch = function (source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// };

function Search(searchFunc: SearchFunc) {
    return searchFunc("Wikepedia", "dia");
}


interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

// myArray["1"] = myArray[1]; // Apparently this is fine in typescript......

let myStr: string = myArray[0];

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    [x: string]: Animal;
}


interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) { } as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0; 