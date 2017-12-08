// //Замыкания (closures)
// function func() {
//     var i = 0;
//     return function () {
//         return i++;
//     }
// }
//
// var func2 = func();
//
// document.write(func2() + "<br/>");
// document.write(func2() + "<br/>");
// document.write(func2() + "<br/>");
// document.write(func2() + "<br/>");
// document.write(func2() + "<br/>");


// //Objects
// var obj = {
//     name: "John",
//     lastName: "Doe",
//     age: 25
// };
//
// for(var key in obj) {
//     document.write(obj[key] + "<br/>");
// }
//
// console.log(obj);

var person = {
    name: "Pablo Picasso"
};

function addName(obj, name) {
    var arr = obj.name.split(" ");
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === name) return "Имя уже существует";
    }
    arr.push(name);
    return obj.name = arr.join(" ");
}

function removeName(obj, name) {
    var arr = obj.name.split(" ");
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === name) {
            arr.splice(i, 1);
            return obj.name = arr.join(" ");
        }
    }
    return "Такого имени нет";
}

console.log(addName(person, "Garcia"));
console.log(addName(person, "John"));
console.log(removeName(person, "John"));
console.log(removeName(person, "John"));
console.log(removeName(person, "John"));