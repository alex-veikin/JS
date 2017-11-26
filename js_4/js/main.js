// var birth = +prompt("Your year of birth");
// var age = 0;
//
// for (birth; birth <= 2017; birth++) {
//     document.write("В " + birth + " году было " + age++ + " лет. <br/>");
// }


// var age = +prompt("Your age");
//
// for (var i = 2018; i <= 2030; i++) {
//     document.write("В " + i + " году будет " + ++age + "<br/>");
// }

// var login = "user";
// do {
//     var loginEnter = prompt("Your login?");
//     if (loginEnter === null) {
//         break;
//     }
// } while (loginEnter !== login);
//
// if(loginEnter === login) {
//     document.write("Добро пожаловать!")
// }

var n = +prompt("Введите число");

for (i = 1; i <= n; i++) {
    document.write(!(i % 2) ? i + "<br/>" : "");
}