//로딩 시
$(window).on("load",function() {
  let bodyoffsest = $(body).offset().top;
  if (bodyoffsest !== 0) {
    $('#load').addClass("hide").css({ zIndex: -100 });
  }else{
    setTimeout(function () {
      $('#load').addClass("hide").css({ zIndex: -100 });
    }, 3000);
  }

    setTimeout(function(){
      $('#preloader').addClass("hide").css({ zIndex: -100 });
      $("svg#wave >path").addClass('on');
        $("#header .right").addClass("on");
        $("#section1 .mainBottom").addClass("show");
        $("#section1 .center").addClass("on");
        $(".cursor").css({display:"block"});
    },3200);
});
//시계
const clockContainer = document.querySelector(".mainClock"),
    clockTitle = clockContainer.querySelector("span");
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes <10 ? `0${minutes}` : minutes
    }:${
        seconds<10 ? `0${seconds}` : seconds
    }`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();
//슬라이드

let myswiper = new Swiper('.swiper-container', {
    slidesPerView: 1, //한번에 보여줄 요소 갯수 지정. auto 로 설정해도 됨.
     //슬라이드간 padding 값 30px 씩 떨어뜨려줌
    loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 
    autoplay: {
      delay: 2000, //2초에 한번씩 자동으로 슬라이드
    },
    on: {
        activeIndexChange: function () {
          let num = this.realIndex+1;
            if(num%3===1) {
                $('.slideTitle .wrap').css({transform:'translateY('+(-30*(num/3))+'%)'});
                $('.slideNum .wrap span').eq(1).css({transform:'translateY('+(-30*(num/3)+5)+'%)'});
                $('.slideNum .wrap span').eq(0).css({transform:'translateY(-0%)'})
            }
            if(num===1){
                $('.slideTitle .wrap').css({transform:'translateY(0)'});
                $('.slideNum .wrap span').eq(1).css({transform:'translateY(-2%)'})
                $('.slideNum .wrap span').eq(0).css({transform:'translateY(-5%)'})
            }else{
                $('.slideNum .wrap span').eq(0).css({transform:'translateY('+(-33*((num-1)%3))+'%)'})
            }
        }
      }
});
//메인 물결 svg
// Document ready!
function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
      // Document is already ready, call the callback directly
      callbackFunc();
    } else if (document.addEventListener) {
      // All modern browsers to register DOMContentLoaded
      document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
      // Old IE browsers
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
          setTimeout(callbackFunc(),3200)
        }
      });
    }
  }
  
  /** TEST CONTROLS **/
  ready(function() {
      var preloader = document.getElementById('preloader');
      var loading = document.getElementById('load');
      
      // Test
      setTimeout(function(){ preloader.className = 'slide-in' });
      setTimeout(function () { preloader.className = 'slide-out' }, 3000);
      setTimeout(function () { loading.className = 'hide' }, 3100);
      
  });
