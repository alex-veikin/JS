// //Конструкторы
//
// var Student = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
//
// var student1 = new Student("John", 25);
//
// console.log(student1.name);
// console.log(student1);


// var button = document.querySelectorAll("button");
//
// for(var i = 0; i < button.length; i++) {
//     button[i].onclick = function() {
//         alert(this.innerHTML);
//     }
// }
//
//
// var Car = {
//   constructor: function (name, velocity, color) {
//       this.name = name;
//       this.velocity = velocity;
//       this.color = color;
//       return this;
//   },
//     go: function () {
//       console.log(this.name + " run with " + this.velocity + "mph");
//     }
// };
//
// var auto1 = Object.create(Car).constructor("BMW", 200, "Black");
//
// auto1.go();

$(function () {

    // $("button").on("click", function () {
    //     $(this).toggleClass("select");
    // });

    $(".slider").height($("img").height());

    var images = $(".images img");

    $(".prev").click(function () {
        var active = images.filter(".active");
        active.removeClass("active");
        active.prev().addClass("active");
    });

    $(".next").click(function () {
        var active = images.filter(".active");
        active.removeClass("active");
        active.next().addClass("active");
    });

});