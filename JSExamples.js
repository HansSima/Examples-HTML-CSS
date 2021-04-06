//console.error("this is a error!");
/*
const kg = 45;
let rating = 3;
let array = ["Harry", "Draco", "Hermione"];


if (rating == 3) {
    console.log("YOU ARE A SUPERSTAR");
}
array.push("Ron", "Luna");
array.pop();
array.shift();
array.unshift("Snape");
console.log(array);

for (let i = 25; i > 0; i = i - 5) {
    console.log(i);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let quit = true;
let toDos = [];

while (quit) {
    let answer = prompt("What you want to do?").toLowerCase();

    if (answer === "add") {
        let addThing = prompt("What you want to add?");
        toDos.push(addThing);
    }
    if (answer === "show") {
        for (let toDo of toDos) {
            console.log(toDo);
        }
    }
    if (answer === "delete") {
        let deleteThing = parseInt(prompt("What number you want to delete?"));
        toDos.splice(deleteThing, 1);
    }
    if (answer === "quit") {
        quit = false;
    }
}
*/
function sumArray(someArray) {
    let result = 0;
    for (let i = 0; i < someArray.length; i++) {
        result = result + someArray[i];
    }
    return result;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([1, 2, 6]));
console.log(sumArray([1, 2, 9]));

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
}

let ret1 = hen.layAnEgg();
let ret2 = hen.layAnEgg();

const cleanNames = [" timothee", "    darth_hater", "sassyfrassy", " elton john   "];
cleanNames.map(function(names) {
    return names.trim();
})