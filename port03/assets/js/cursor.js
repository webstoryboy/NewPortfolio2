const cursor = $(".cursor");

$(window).mousemove(function(e){
    cursor.css({left:e.clientX-25, top:e.clientY-25});
});
$("#section5,#sec5Bg").mouseenter(function(){
    cursor.css({ background:"url(assets/img/btnGraW.png) no-repeat center/cover"});
});
$("#section5,#sec5Bg").mouseleave(function () {
    cursor.css({ background: "url(assets/img/btnGraB.png) no-repeat center/cover" });
});
$("#section6 .container .aniBox2 .content").mouseenter(function () {
    cursor.css({ background: "url(assets/img/csp.png) no-repeat center/contain" });
});
$("#section6 .container .aniBox2 .content").mouseleave(function () {
    cursor.css({ background: "url(assets/img/btnGraB.png) no-repeat center/cover" });
});

//ABOUT 마우스 반응 움직임
const container = document.querySelector("#section2");
const about = document.querySelector(".about");
const walk = 10;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = container;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = (Math.round((x / width/2) * walk - walk / 2))*-1;
    const yWalk = (Math.round((y / height) * walk - walk / 2))*-1;

    about.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 #cecece,
    ${xWalk*1.5}px ${yWalk*1.5}px 0 #cecece,
    ${xWalk * 2}px ${yWalk * 2}px 0 #cecece,
    ${xWalk * 2.5}px ${yWalk * 2.5}px 0 #cecece,
    ${xWalk}px ${yWalk}px 0 #cecece,
    ${xWalk * 3}px ${yWalk * 3}px 0 #cecece,
    ${xWalk * 3.5}px ${yWalk * 3.5}px 0 #cecece,
    ${xWalk * 4}px ${yWalk * 4}px 0 #cecece,
    ${xWalk * 4.5}px ${yWalk * 4.5}px 0 #cecece,
    ${xWalk * 5}px ${yWalk * 5}px 0 #cecece,
    ${xWalk * 5.5}px ${yWalk * 5.5}px 0 #cecece,
    ${xWalk * 6}px ${yWalk * 6}px 0 #cecece,
    ${xWalk * 6.5}px ${yWalk * 6.5}px 0 #cecece,
    ${xWalk * 7}px ${yWalk * 7}px 0 #cecece,
    ${xWalk * 7.5}px ${yWalk * 7.5}px 0 #cecece,
    ${xWalk * 8}px ${yWalk * 8}px 0 #cecece,
    ${xWalk * 8.5}px ${yWalk * 8.5}px 0 #cecece
    
  `;

}

container.addEventListener("mousemove", shadow);

