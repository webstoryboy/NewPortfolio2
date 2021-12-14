const stairLi = $(".stairText li");

stairLi.on("mouseenter",function(){
    $(this).addClass("shake");
});
stairLi.on("mouseleave", function () {
    $(this).removeClass("shake");
});