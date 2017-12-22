$(function () {

    function Slider() {
        this.images = $(".slider img");
        this.btnPrev = $(".slider .prev");
        this.btnNext = $(".slider .next");

        var i = 0;

        var slider = this;

        this.prev = function () {
            slider.images.eq(i).removeClass('showed');
            i--;

            if (i < 0) {
                i = slider.images.length - 1;
            }

            slider.images.eq(i).addClass('showed');
        };

        this.next = function () {
            slider.images.eq(i).removeClass('showed');
            i++;

            if (i >= slider.images.length) {
                i = 0;
            }

            slider.images.eq(i).addClass('showed');
        };

        slider.btnPrev.click(slider.prev);
        slider.btnNext.click(slider.next);
    }

    var slider = new Slider();

});