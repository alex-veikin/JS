// var count = 100;
//
// do {
//     var get = +prompt("Сколько достать хомячков?");
//
//     if (count < get) {
//         document.write("Слишком много");
//     }
//
//     if (get === 0) {
//         alert("Берите больше");
//     } else if (isNaN(get)) {
//         get = 0;
//         alert("Нужно ввести число");
//     }
//
//     count -= get;
// } while (count > 0);



var width = +prompt("Введите ширину прямоугольника");
var height = +prompt("Введите  прямоугольника");

for (var i = height; i > 0; i--) {
    for (var j = width; j > 0; j--) {
        if (i === height || i === 1) {
            document.write("*");
        } else if (j === width || j === 1) {
            document.write("*");
        } else {
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br/>");
}



// var w = 25;
// var h = (w - (w % 2)) / 2 + (w % 2);
// var left = w;

// for (i = h; i > 0; i--) {
	// var str = "";
	
	// for (j = i; j <= w; j++) {
		// if (i === 1 || j === w || j === left) {
			// str += "*";
		// } else {
			// str += "&nbsp&nbsp";
		// }
	// }
	
	// left -= 2;
	// document.write(str + "<br/>");
// }


var w = 11;
var h = Math.floor(w / 2);
var left = w;

for (i = 0; i < w; i++) {
	var str = "";
	
	if (i <= h) {
		for (j = h - i + 1; j <= w; j++) {
			str += (j === left || j === w) ? "*" : "&nbsp&nbsp";
		}
	} else {
		for (j = i - h + 1; j <= w; j++) {
			str += (j === left || j === w) ? "*" : "&nbsp&nbsp";
		}
	}
	
	(i < h) ? left -= 2 : left += 2;
	document.write(str + "<br/>");
}