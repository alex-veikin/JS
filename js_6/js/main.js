var arr = [2, 8, 5, -3, 45, 4, 6, -11, 14, 22];


//Создать массив из 10ти элементов и вывести на экран сумму всех элементов массива.
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

document.write(sum + "<br/><br/>");


//Найти среднее арифметическое значение элементов массива,
// которые стоят на четных местах.
var average = 0;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (!(i % 2)) {
        average += arr[i];
        count++;
    }
}

document.write(average / count + "<br/><br/>");


//Создать массив, элементы которого равны элементам исходного массива,
// но с противоположными знаками.
// (Длина исходного массива должна быть не меньше 10ти элементов).
var arr2 = [];

for (var i = 0; i < arr.length; i++) {
    arr2[i] = -1 * arr[i];
}

document.write(arr2 + "<br/><br/>");


//Автоматически заполнить массив нулями, кроме первого и последнего элементов,
// которые должны быть единицами. (Количество элементов массива: 8)
var arr3 = [];

for (var i = 0; i < 8; i++) {
    arr3[i] = (i === 0 || i === 7) ? 1 : 0;
}

document.write(arr3 + "<br/><br/>");


//Заполнить массив нулями и единицами,
// при этом данные значения чередуются, начиная с нуля.
var arr4 = [];

for (var i = 0; i < 8; i++) {
    arr4[i] = (i % 2) ? 1 : 0;
}

document.write(arr4 + "<br/><br/>");


//Заполнить массив последовательными нечетными числами начиная с единицы.
// (Количество элементов массива: 8)
var arr5 = [];
var start = 1;

for (var i = 0; i < 8; i++) {
    arr5[i] = start;
    start += 2;
}

document.write(arr5 + "<br/><br/>");


//Сформировать массив из чисел, которые делятся на 3
// (Количество элементов массива: 8)
var arr6 = [];
var num = 3;

for (var i = 0; i < 8; i++) {
    arr6[i] = num;
    num += 3;
}

document.write(arr6 + "<br/><br/>");


//С помощью цикла создать массив,
// каждый элемент которого равен квадрату своего номера.
var arr7 = [];

for (var i = 0; i < 10; i++) {
    arr7[i] = (i) ? (i * i) : 0;
}

document.write(arr7 + "<br/><br/>");


//С помощью цикла создать массив,
// который одинаково читается как слева направо,
// так и справа налево (Количество элементов массива: 9).
var arr8 = [];
var countIt = 9;

for (var i = 0; i < countIt; i++) {
    arr8[i] = (i < 5) ? i : (countIt - i - 1);
}

document.write(arr8 + "<br/><br/>");


//Создать массив из 10 чисел.
// Вывести на экран количество четных чисел из этого массива.
var arr9 = [12, 45, 32, -16, 48, 26, 11, -45, 6, 16];
var num2 = 0;

for (var i = 0; i < 10; i++) {
    num2 += (arr9[i] % 2) ? 0 : 1;
}

document.write(num2 + "<br/><br/>");


//Создать массив из 10 чисел.

//Вывести на экран наибольшее число из этого массива.
//Найдите количество элементов массива,
//которые отличны от наибольшего не более чем на 10%.

//Вывести на экран наименьшее число из этого массива.
//Найдите и выведите на экран наименьший четный элемент массива.
var arr10 = [12, 45, 32, -16, 48, 26, 11, -45, 6, 16];
var biggest = -Infinity;
var smallest = Infinity;
var smallestEven = Infinity;
var countNum = 0;

for (var i = 0; i < arr10.length; i++) {
    biggest = (arr10[i] > biggest) ? arr10[i] : biggest; // ишем наибольшее
}

for (var i = 0; i < arr10.length; i++) {
    countNum += (arr10[i] > (biggest * 0.9)) ? 1 : 0; // ишем отличные на 10%
}

for (var i = 0; i < arr10.length; i++) {
    smallest = (arr10[i] < smallest) ? arr10[i] : smallest; //ищем наименьшее
    if (!(arr10[i] % 2)) {
        smallestEven = (arr10[i] < smallestEven) ? arr10[i] : smallestEven; //ищем наименьшее четное
    }
}

document.write("Самое большое число в массиве: " + biggest +
    ", отличныx  не более чем на 10%: " + countNum + "<br/>");
document.write("Самое маленькое число в массиве: " + smallest +
    ", наименьшее четное: " + smallestEven + "<br/><br/>");


//Создать массив из 10 чисел.
// Среди элементов с нечетными номерами найдите наибольший элемент массива,
// который делится на 3.
var arr11 = [18, 21, 14, 8, 56, -9, 41, 24, -2, 31];
var biggestOdd = -Infinity;

for (var i = 0; i < arr11.length; i++) {
    if ((i % 2) && !(arr11[i] % 3))
        biggestOdd = (arr11[i] > biggestOdd) ? arr11[i] : biggestOdd; // ишем наибольшее
}

document.write("Наибольший элемент с нечетным номером, который делится на 3: " +
    biggestOdd + "<br/>");


//Дан массив и число n. Найдите число в массиве,
// которое наиболее близко к числу n.
var arr12 = [2, 14, 7, 12, 32, 20, 25, 31, 13, 8];
var number = 16;
var numberSmall = -Infinity;
var numberBig = Infinity;
var numberSearch;

for (var i = 0; i < arr12.length; i++) {
    if ((arr12[i] <= number) && (arr12[i] >= numberSmall)) {
        numberSmall = arr12[i];
    } else if ((arr12[i] >= number) && (arr12[i] <= numberBig)) {
        numberBig = arr12[i];
    }
}

if ((number - numberSmall) < (numberBig - number)) {
    numberSearch = numberSmall;
} else {
    numberSearch = numberBig;
}

document.write("Самое близкое число к " + number + " - " +
    numberSearch + "<br/><br/>");


//Создайте массив из 10 чисел.
// Найдите три последовательных элемента в массиве, сумма которых максимальна.
var arr13 = [2, 14, 7, 1, 32, 2, 5, 3, 13, 8];
var arr13New = [];
var arr13NewSum = -Infinity;

for (var i = 0; i < arr13.length - 2; i++) {
    if ((arr13[i] + arr13[i + 1] + arr13[i + 2]) > arr13NewSum) {
        arr13NewSum = arr13[i] + arr13[i + 1] + arr13[i + 2];
        arr13New = [arr13[i], arr13[i + 1], arr13[i + 2]];
    }
}

document.write(arr13New + ", сумма: " +
    arr13NewSum + "<br/><br/>");


//Создайте массив из 10 чисел.
// Отсортируйте элементы массива по убыванию.
var arr14 = [21, 14, 7, 11, 32, 2, 15, 3, 13, 8];
var len = arr14.length;
var arrDesc = [];
var arrAsc = [];
var small = Infinity;

for (var i = 0; i < len; i++) {
    for (var j = 0; j < arr14.length; j++) {
        if (arr14[j] < small) { //Выбираем наименьшее
            small = arr14[j]; //Запоминаем наименьшее
            var key = j;
        }
    }
    arr14.splice(key, 1); //Удаляем выбранный
    arrDesc.unshift(small); //Сортируем по убыванию
    arrAsc.push(small); //Сортируем по возрастанию
    small = Infinity;
}

document.write(arrDesc + "<br/>" + arrAsc + "<br/><br/>");


//Создайте массив из 10 чисел.
// Отсортируйте элементы массива по убыванию.
//Пузырьковая сортировка
var arr15 = [21, 14, 7, 11, 32, 2, 15, 3, 13, 8];


for (var i = 0; i < arr15.length - 1; i++) {
    for (var j = 0; j < arr15.length - i - 1; j++) {
        if (arr15[j] < arr15[j + 1]) {
            var temp = arr15[j];
            arr15[j] = arr15[j + 1];
            arr15[j + 1] = temp;
        }
    }
}

document.write(arr15 + "<br/>");

for (var i = 0; i < arr15.length - 1; i++) {
    for (var j = 0; j < arr15.length - i - 1; j++) {
        if (arr15[j] > arr15[j + 1]) {
            var temp = arr15[j];
            arr15[j] = arr15[j + 1];
            arr15[j + 1] = temp;
        }
    }
}

document.write(arr15 + "<br/><br/>");


//Сортировка слиянием
var arr16 = [21, 14, 7, 11, 32, 2, 15, 3, 13, 8];

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var arrNew = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arrNew.push(left.shift());
        } else {
            arrNew.push(right.shift());
        }
    }

    return arrNew.concat(left, right);
}

document.write(mergeSort(arr16) + "<br/><br/>");


//Создайте массив из 10 чисел.
//Выведите на экран количество одинаковых элементов массива.
var arr17 = [8, 14, 11, 14, 32, 8, 11, 3, 8, 8];
var arr17New = [];
var countItem = 1;

for (var i = 0; i < arr17.length - 1; i++) {
    for (var j = i + 1; j < arr17.length; j++) {
        if (~arr17New.indexOf(arr17[i])) continue;
        if (arr17[i] === arr17[j]) countItem++;
    }
    if (countItem > 1) {
        arr17New.push(arr17[i]);
        document.write("Число " + arr17[i] + " - " + countItem + " раза<br/>");
    }
    countItem = 1;
}
