// function rus(name) {
//     return "Привет, " + name + "!";
// }
//
// function en(name) {
//     return "Hello, " + name + "!";
// }
//
// function hello(name, callback) {
//     return callback(name);
// }
//
// document.write(hello("Вася", rus));



// (function(a, b){return a + b;}(2, 5));



// (function(name, age) {
//     document.write(name.slice(0, -1) + "е " + age + " лет");
// }("Вася", 25));



function num(a, b) {
    return function () {
        return (a < b) ? b : (a > b) ? a : "Равны";
    }
}

document.write(num(2, 5)());