//Задание 1

//var a = +prompt("Первое число");
//var b = +prompt("Второе число");
//
//a > b ? document.write(a) :
//	a < b ? document.write(b) :
//	a == b ? document.write(a + ' = ' + b) :
//	document.write('Неверные данные');


//Задание 2

//var a = +prompt("Первое число");
//var b = +prompt("Второе число");
//var c = +prompt("Третье число");
//
//((a > b) && (a > c)) ? document.write(a) :
//	((b > a) && (b > c)) ? document.write(b) :
//	((c > a) && (c > b)) ? document.write(c) :
//	(a == b && a == c) ? document.write("Все числа равны") :
//	document.write('Неверные данные');


//Задание 3

//var day = +prompt("Введите день недели");
//
//switch (day) {
//	case 1:
//		document.write('Понедельник');
//		break;
//	case 2:
//		document.write('Вторник');
//		break;
//	case 3:
//		document.write('Среда');
//		break;
//	case 4:
//		document.write('Четверг');
//		break;
//	case 5:
//		document.write('Пятница');
//		break;
//	case 6:
//		document.write('Суббота');
//		break;
//	case 7:
//		document.write('Воскресенье');
//		break;
//	default:
//		document.write('Неверные данные');
//}

//Задание 4

var a = +prompt("Первое число");
var b = +prompt("Второе число");
var c = +prompt("Третье число");
var D = (b * b) - 4 * a * c;

if (a != 0 && D > 0) {
	var x1 = (-b + Math.sqrt(D)) / (2 * a);
	var x2 = (-b - Math.sqrt(D)) / (2 * a);
	document.write("x1 = " + x1 + "<br/> x2 = " + x2);
} else if (a != 0 && D == 0) {
	var x = -b / (2 * a);
	document.write("x1 = x2 = " + x);
} else {
	document.write('Уравнение не имеет решения');
}