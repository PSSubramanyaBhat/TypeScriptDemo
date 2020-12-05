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