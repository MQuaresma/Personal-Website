$(window).scroll(scrollHandler);

function scrollHandler(){
    if($(window).scrollTop() > 5){
        $("#website-navbar").addClass("scrolled_nav");
        $("a").addClass("scrolled");
    }else{
        $("#website-navbar").removeClass("scrolled_nav");
        $("a").removeClass("scrolled");
    }
};