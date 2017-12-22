$(function () {

    (function slider() {
        var images = $(".slider img");
        var btnPrev = $(".slider .prev");
        var btnNext = $(".slider .next");

        var i = 0;

        var prev = function () {
            images.eq(i).removeClass('showed');
            i--;

            if (i < 0) i = images.length - 1;

            images.eq(i).addClass('showed');
        };

        var next = function () {
            images.eq(i).removeClass('showed');
            i++;

            if (i >= images.length) i = 0;

            images.eq(i).addClass('showed');
        };

        btnPrev.click(prev);
        btnNext.click(next);
    }());






    var note = $(".note");
    var btnAdd = $(".add");
    var btnDel = $(".del");
    var list = $(".list ul");

    function select() {
        $(this).toggleClass("selected");
        $("li").not($(this)).removeClass("selected");
        if($("li.selected").length) {
            btnDel.fadeIn();
        } else {
            btnDel.fadeOut();
        }
    }

    function addNew() {
        str = "<li>" + note.val() + "</li>";

        $(str).appendTo(list);
        note.val("");
        btnAdd.fadeOut();
    }

    function deleteItem() {
        $("li.selected").remove();
        btnDel.fadeOut();
    }


    note.keyup(function() {
        if (note.val()) {
            btnAdd.fadeIn();
        } else {
            btnAdd.fadeOut();
        }
    });

    btnAdd.click(function() {
        if (note.val()) {
            addNew();
        }
    });

    $("ul").on("click", "li", select);

    btnDel.click(function () {
        if($("li.selected").length) {
            deleteItem();
        }
    });

});