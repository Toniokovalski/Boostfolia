(function($){
    $(document).ready(function(){
        resizeVideo();
        $('.flexslider').flexslider({
            animation: "fade",
            controlNav: false
        });

        $('.flexslider-2').flexslider({
            animation: "slide",
            controlNav: false
        });
        $(".tabs").lightTabs();

        setInterval(resizeVideo, 100);

        $(".link_wrapper, .sandwich").on("click", function (e) {
            e.preventDefault();
            $(".map_wrapper, .sandwich_menu").toggle();
        });
        $(".slider-info_scroll").on("click", function (e) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: $(".scroll").offset().top
            }, 1500);
        })
    });

    function resizeVideo() {
        $( ".video" ).height($( ".scene" ).height());
        $( ".author" ).height($( ".author-skills" ).height());
    }

    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            };

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);


