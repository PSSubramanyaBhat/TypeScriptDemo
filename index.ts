//A function that sort's an Array of Student objects...

let students = [
    { name: 'Shripada', age: 34 },
    { name: 'Srivatsa', age: 22 },
    { name: 'Subba', age: 21 },
    { name: 'Mayur', age: 22 }
];


interface Student {
    name: string,
    age: number
    // age ?: number
}

function sortByName(arr: Student[]) {
    const copiedArr = [...arr];
    copiedArr.sort((first, second) => {
        return first.name.localeCompare(second.name);
    })

    return copiedArr;
}

const sorted = sortByName(students);