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



// var person = {
//     name: "Pablo Picasso"
// };
//
// function addName(obj, name) {
//     var arr = obj.name.split(" ");
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] === name) return "Имя уже существует";
//     }
//     arr.push(name);
//     return obj.name = arr.join(" ");
// }
//
// function removeName(obj, name) {
//     var arr = obj.name.split(" ");
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] === name) {
//             arr.splice(i, 1);
//             return obj.name = arr.join(" ");
//         }
//     }
//     return "Такого имени нет";
// }
//
// console.log(addName(person, "Garcia"));
// console.log(addName(person, "John"));
// console.log(removeName(person, "John"));
// console.log(removeName(person, "John"));
// console.log(removeName(person, "John"));


var lines = {
    line1: {
        aX: 2,
        aY: 2,
        bX: 5,
        bY: 5
    },
    line2: {
        aX: 5,
        aY: 5,
        bX: 8,
        bY: 2
    },
    line3: {
        aX: 5,
        aY: 2,
        bX: 8,
        bY: 2
    },
    lenOfLine: function(obj) {
        var leg1 = obj.bX - obj.aX;
        var leg2 = obj.bY - obj.aY;
        return Math.sqrt((leg1 * leg1) + (leg2 * leg2));
    },
    result: function() {
        if ((this.lenOfLine(this.line1) < this.lenOfLine(this.line2) + this.lenOfLine(this.line3)) &&
            (this.lenOfLine(this.line2) < this.lenOfLine(this.line1) + this.lenOfLine(this.line3)) &&
            (this.lenOfLine(this.line3) < this.lenOfLine(this.line1) + this.lenOfLine(this.line2))){
            return "Линии могут сформировать треугольник"
        } else {
            return "Треугольник не может быть сформирован";
        }
    }
};

console.log(lines.result());



///////////////////////////////////
function toConsole(arr) {
    console.log(arr);
}

function toAlert(arr) {
    alert(arr);
}

function splitToWords(msg, callback) {
    var arr = msg.split(" ");
    return (typeof callback === "function") ? callback(arr) : arr;
}

// splitToWords("My very long text", toAlert);
// splitToWords("My very long text", toConsole);
// document.write(splitToWords("My very long text"));



////////////////////////////////////
function myFunc(param1, param2){
    var getArray = function (str) {
        var substring = str.substring(str.indexOf(":") + 1, str.lastIndexOf(".")).trim();
        return substring.split(", ");
    };
    return  getArray(param1).concat(getArray(param2));
}

console.log(
    myFunc("This is the first sentence. " +
        "This is a sentence with a list of items: cherries, oranges, apples, bananas.",
    "This is the second sentence. " +
        "This is a sentence with a list of items: red, blue, yellow, black."));



/////////////////////////////////
function find(str) {
    if (arguments.length > 1) {
        for(var i = 1; i < arguments.length; i++) {
            if (str.indexOf(arguments[i]) >= 0) return str.indexOf(arguments[i]);
        }
        return -1;
    }
    return  str;
}

console.log(find("abc", "b"));
console.log(find("abc", "d"));
console.log(find("abc", "d", "c"));
console.log(find("abc"));



//////////////////////////////////
function str (str) {
    return str;
}

str.isNonEmptyStr = function () {
    return (typeof this.str === "string");
};

console.log(str.isNonEmptyStr());