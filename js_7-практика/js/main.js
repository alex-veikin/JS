//Задание 1
oboltusy = ["Евлампий", "Никодим", "Акакий", "Поликарп"];
otlichniki = ["Лукьян", "Феофил", "Афиноген"];

function transferStudent(name) {
    var id = oboltusy.indexOf(name);
    otlichniki.push(oboltusy.splice(id, 1));
}

transferStudent("Никодим");

document.write(oboltusy + "<br/>");
document.write(otlichniki + "<br/><br/>");


//Задание 2
var str = "my-short-string";

function hyphenDestroyer(str) {
    return str.split("-").join(" ");
}

document.write(hyphenDestroyer(str) + "<br/><br/>");


//Задание 3
var arr = [];

for (var i = 1; i <= 20; i++) {
    arr[i] = i * 5;
}

console.log(arr);


//Задание 4
var arrOne = ["a", "b", "c", "d"];
var arrTwo = ["a", "b", "c", "d"];

if (arrOne.length === arrTwo.length) {
    var res = true;
    for (var i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            res = false;
        }
    }

    document.write(res ? "Массивы равны" + "<br/><br/>" : "Массивы не равны" + "<br/><br/>");
}


//Задание 5
var arr2 = [8, 8, 1, 7, 7, 7, 1, 1, 1, 1, 3];
var item;
var count = 0;
var result = [];

for (var i = 0; i < arr2.length; i++) {
    var temp = 0;
    for (var j = i; j < arr2.length; j++) {
        if (arr2[i] === arr2[j]) {
            temp++;
        } else break;
    }
    if (temp > count) {
        item = arr2[i];
        count = temp;
    }
}

for (var k = 0; k < count; k++) {
    result[k] = item;
}

document.write(result + "<br/><br/>");


//Задание 6
var arr3 = [1, 2, 3, 7, 3, 4, 5, 6, 1, 2, 3, 4];
var counter = 1, counterPrev = 1, tmpKey = 0, key = 0;

for (var i = 0; i < arr3.length - 1; i++) {
    if (arr3[i] === (arr3[i + 1] - 1)) {
        counter++;
        if (counterPrev < counter) {
            counterPrev = counter;
            tmpKey = key;
        }
    } else {
        counterPrev = counter;
        counter = 1;
        tmpKey = key;
        key = i + 1;
    }
    console.log(tmpKey);
}

document.write(arr3.slice(tmpKey, tmpKey + counterPrev) + "<br/><br/>");