$(window).scroll(scrollHandler);

function scrollHandler(){
    if($(window).scrollTop() > 5){
        $("#website-navbar").addClass("scrolled_nav");
    }else{
        $("#website-navbar").removeClass("scrolled_nav");
    }
};