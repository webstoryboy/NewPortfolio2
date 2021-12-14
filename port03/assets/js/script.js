let css_test_idx = 10;
// const jsCursor = $("#section7 .jsCursor")
$( function() {
    $( ".drag-content" )
    .draggable({ scroll: true, scrollSensitivity: 50, scrollSpeed: 50,helper: "original"})
    .css( 'cursor', 'move' )
    .mousedown(function(){ // mousedown 이벤트 생성
        $(this).css('z-index', css_test_idx); // 클릭한 이미지만 z-index 증가시킴
        css_test_idx++;
    })
});
// $("#section7").mousemove(function(e){
//     jsCursor.css({left:e.pageX , top:e.pageY , display:"block"})
// })

// //isotope
// const $wrap = $("#section7");
// const $filter = $(".filter li a");
// $wrap.isotope({
//     itemSelector: '.item'
// });

// //sort
// $filter.on("click", function(e) {
//     e.preventDefault();
//     let $this = $(this);
//     $filter.removeClass("on");
//     $this.addClass("on");
//     let selector = $this.attr('data-filter');
//     $wrap.isotope({ filter: selector });
// });