//가로모드
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  let offset = scrollTop - $("#section6").offset().top;
  let isDone = true;
  let navhason = $(".scrollNav li").hasClass("on");
  let navIndex = $(".scrollNav li.on").index();

  if( scrollTop > $("#section6").offset().top ){
      $("#section6 .sec6").css({transform:"translatex(-"+offset+"px)"});
  }
  const left = $(".scrollNav li").offset().left;
  // console.log(left);
  
  if(isDone && navhason){
        activation(navIndex);     
        isDone = false;
    }  
  $("#section6 .sec6 .container .aniBox").each(function(index){
      if((left*1.2)> $("#section6 .sec6 .aniBox").eq(index).offset().left){
        $(".scrollNav li").removeClass("on");  
        $(".scrollNav li").eq(index).addClass("on");

      }else if(left< $("#section6 .sec6 .aniBox").eq(index).offset().left){
        $(".scrollNav li").eq((index)).removeClass("on");
      }
      
  });

  function activation(i){
    $(".scrollNav li").removeClass("active");
    $(".scrollNav li").eq(i).addClass("active");
    $("#section6 .container >div").find(".aniTitle").removeClass("on");
    $("#section6 .container >div").eq(i).find(".aniTitle").addClass("on");
  }

 


});

// 춘식이 움직이는 애니메이션
// select elements
const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");

// init cursor position
let cursorPos = { x: 0, y: 0 };

// get window size
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function setWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
};

function mousemove(e) {
  cursorPos = { x: e.clientX, y: e.clientY } 
  initFolow();
    
}
function touchmove(e) {
  cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY}
  initFolow();
}

const followCursor = (el, xRatio, yRatio) => {
  const elOffset = el.getBoundingClientRect();
  const centerX = elOffset.x + elOffset.width / 2;
  const centerY = elOffset.y + elOffset.height / 2;
  const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / window.innerWidth);
  const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / window.innerHeight);  
  el.style.transform = `translate(${distanceLeft / xRatio}px, ${distanceTop / yRatio}px)`;
}

const initFolow = () => {
  if (ears) followCursor(ears, -2.8, -2.8)
  if (head) followCursor(head, 6, 6)
  if (eyes) followCursor(eyes, 1.8, 1.8)
  if (snout) followCursor(snout, 1.5, 1.7)
  if (nose) followCursor(nose, 1.7, 1.7)
}

window.addEventListener('resize', setWindowSize);
window.addEventListener("mousemove", mousemove);
window.addEventListener("touchmove", touchmove);


let ani2Width = $(".aniBox2").offsetX-400;
let ani2Height = $(".aniBox2").offsetY-300;

$(".aniBox2").on("mousemove",function(){
  $(".aniBox2 .sweet").css({left:(cursorPos.x-ani2Width), top:(cursorPos.y-ani2Height),display:"block"})
});

$(".aniBox2").on("mouseout",function(){
  $(".aniBox2 .sweet").css({display:"none"})
});
