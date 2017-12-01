//Задание 1
function dayToStr(day) {
    if (day > 0 && day < 8) {
        switch (day) {
            case 1: return 'Понедельник';
            case 2: return 'Вторник';
            case 3: return 'Среда';
            case 4: return 'Четверг';
            case 5: return 'Пятница';
            case 6: return 'Суббота';
            case 7: return 'Воскресенье';
        }
    } else {
        return 'Неверно указан день недели';
    }
}

document.write(dayToStr(0) + '<br/>');
document.write(dayToStr(6) + '<br/>');
document.write(dayToStr(3) + '<br/>');
document.write(dayToStr(8) + '<br/>');
document.write("<br/>");


//Задание 2
var a = +prompt("Введите оценку за первую четверть");
var b = +prompt("Введите оценку за вторую четверть");
var c = +prompt("Введите оценку за третью четверть");
var d = +prompt("Введите оценку за четвертую четверть");

function averageOfYear(a, b, c, d) {
    if (!a || !b || !c || !d) return "Неверно введены оценки";
    return (a + b + c + d) / 4;
}

document.write(averageOfYear(a, b, c, d) + '<br/>');
document.write("<br/>");


//Задание 3
function myStat(wins, losses) {
    var percent = (wins + losses) / 100;
    return "Процент побед - " + wins / percent + "%, процент поражений - " + losses / percent + "%";
}

document.write(myStat(132, 243) + '<br/>');
document.write("<br/>");


//Задание 4
var array = [2, 3, 5, 9, 4];
function elevate(arr, pow) {
    for(var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        for(var j = 0; j < pow - 1; j++) {
            arr[i] *= tmp;
        }
    }

    return arr;
}

document.write(elevate(array, 3) + '<br/>');
document.write("<br/>");


//Задание 5
var arr = [1,1,1,4,4,5,1,6,6,74,74,74,3];

function getRepeat(arr) {
    var arrNew = [];
    var count = 1;

    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if (~arrNew.indexOf(arr[i])) continue;
            if (arr[i] === arr[j]) count++;
        }
        if (count > 1) {
            arrNew.push(arr[i]);
        }
        count = 1;
    }

    return arrNew;
}

document.write(getRepeat(arr) + '<br/>');
document.write("<br/>");


//Задание 6
function buildArray(start, amount, num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr[i] = [];
        for(var j = 0; j < amount; j++) {
            arr[i][j] = start + j + i;
        }
    }

    return arr;
}

document.write(buildArray(2, 3, 3) + '<br/>');
document.write("<br/>");


//Задание 7
var myArr = [[1, 2, 5, 6, 6, 8, 2, 1], [2, 3, 6, 8, 9, 5, 4, 2]];

function returnLarger(arr) {
    var sum = 0;
    var tmp = 0;
    var id = 0;

    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            tmp += arr[i][j];
        }

        if(tmp > sum){
            sum = tmp;
            id = i;
        }
    }

    return arr[id];
}

document.write(returnLarger(myArr) + '<br/>');
document.write("<br/>");