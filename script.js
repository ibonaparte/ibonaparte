/*Sets the height of the DT Image Scroll Container 
/equal to height of project description*/
function sizeScroller(){
    $(".project-imgs-container").css("height","0px");
    var scrollerHeight = $(".project-description-container").css("height");

    
    $(".project-imgs-container").css("height",scrollerHeight);
}

//Once page is painted - size the DT image scroller
$(window).on("load", function(){
    if ($(window).width() > 992) {
        sizeScroller();
    }
});


    


