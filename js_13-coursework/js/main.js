$(function () {

    var text = $(".text");
    var color = $(".color");
    var marker = $(".marker");
    var create = $(".create");
    var up = $(".up");
    var del = $(".del");
    var ul = $(".elements ul");

    function addNew() {
        var el = "<li>" + text.val() + "</li>";

        $(el).css({
            "color": color.val(),
            "list-style-type": marker.val()
        }).appendTo(ul);

        $(".form input").val("");
        $("li.active").removeClass("active");
    }

    function update() {
        var el = $("li.active");

        el.css({
            "color": color.val(),
            "list-style-type": marker.val()
        });

        el.html(text.val());
        el.removeClass("active");
        $(".form input").val("");
    }

    function selectElement() {
        var li = $("li");
        $(this).addClass("active");
        li.not($(this)).removeClass("active");

        text.val($(this).html());

        var style = $(this).attr("style");
        style = style.slice( (style.indexOf(":") + 2), (style.indexOf(";")) );
        color.val(style);

        marker.val($(this).css("list-style-type"));
    }

    ul.on("click", "li", selectElement);

    create.click(function(){
        if(text.val() && color.val() && marker.val()) {
            addNew();
        }
    });

    up.click(update);

    del.click(function() {
        $("li.active").remove();
    });

});