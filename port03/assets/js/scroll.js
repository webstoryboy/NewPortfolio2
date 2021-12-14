$(window).ready(function () {
    let windowW = $(window).width();
    if (768 < windowW) {
        media1();
    }

    else if (600 <= windowW && windowW <= 768) {
        media2();
    }
    else if (0 < windowW < 600) {
        media3();
    }
});
$(window).resize(function (){
    let windowW = $(window).width();
    if (768 < windowW){
        media1();
    }
    
    else if (600 <= windowW && windowW <= 768){
        media2();
    }
    else if (0 < windowW < 600) {
        media3();
    }
});
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    //이질감 효과
    $(".drag-content").each(function (index) {
        let offset1 = (scrollTop - $(this).offset().top) * 0.05;
        let offset2 = (scrollTop - $(this).offset().top) * 0.03;
        let offset3 = (scrollTop - $(this).offset().top) * 0.10;

        $(".type1").css({ transform: "translateY(" + -offset1 + "px)" });
        $(".type2").css({ transform: "translateY(" + offset2 + "px)" });
        $(".type3").css({ transform: "translateY(" + -offset3 + "px)" });

    });
    
    $(".sec3__text").each(function(index){
        let sec3p = $(this).offset().top;
        if(scrollTop >= sec3p-700){
            $(this).find("p").addClass("show");
        }else {
            $(this).find("p").removeClass("show");
        }
    })
    
})

function media1(){
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        //slo text
        $(".slo").each(function (index) {
            let sloH = $(this).height();
            let offset = $(this).offset().top - sloH;
            if (scrollTop > offset) {
                $(this).addClass("angle");
            } else {
                $(this).removeClass("angle");
            }
        })

        //work section text나타나기
        $(".site-wrap .site .right h3").each(function (index) {
            let sloH = $(this).height();
            let offset = $(this).offset().top - sloH * 3;
            if (scrollTop > offset) {
                $(this).parent(".right").siblings(".center").addClass("show");
                $(this).parent(".right").siblings(".left").addClass("show");
                $(this).addClass("angle");
                $(this).siblings("dl").find("dt").addClass("show");
                $(this).siblings("dl").find("dd").addClass("show");
            } else {
                $(this).parent(".right").siblings(".center").removeClass("show");
                $(this).parent(".right").siblings(".left").removeClass("show");
                $(this).removeClass("angle");
                $(this).siblings("dl").find("dt").removeClass("show");
                $(this).siblings("dl").find("dd").removeClass("show");
            }
        })
        const stairLi = $(".stairText li");
        let stairOffset = $(".stairText").offset().top - 500;
        if (scrollTop > stairOffset) {
            stairLi.addClass("show");
        } else {
            stairLi.removeClass("show");
        }

    });
}
function media2() {
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        //slo text
        $(".slo").each(function (index) {
            let sloH = $(this).height();
            let offset = $(this).offset().top - sloH*2;
            if (scrollTop > offset) {
                $(this).addClass("angle");
            } else {
                $(this).removeClass("angle");
            }
        })

        //work section text나타나기
        $(".site-wrap .site .right h3").each(function (index) {
            let sloH = $(this).height();
            let offset = $(this).offset().top - sloH * 5;
            if (scrollTop > offset) {
                $(this).parent(".right").siblings(".center").addClass("show");
                $(this).parent(".right").siblings(".left").addClass("show");
                $(this).addClass("angle");
                $(this).siblings("dl").find("dt").addClass("show");
                $(this).siblings("dl").find("dd").addClass("show");
            } else {
                $(this).parent(".right").siblings(".center").removeClass("show");
                $(this).parent(".right").siblings(".left").removeClass("show");
                $(this).removeClass("angle");
                $(this).siblings("dl").find("dt").removeClass("show");
                $(this).siblings("dl").find("dd").removeClass("show");
            }
        })
        const stairLi = $(".stairText li");
        let stairOffset = $(".stairText").offset().top - 400;
        if (scrollTop > stairOffset) {
            stairLi.addClass("show");
        } else {
            stairLi.removeClass("show");
        }

    });
}
function media3() {
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        //slo text
        $(".slo").each(function (index) {
            let sloH = $(this).height();
            let offset = $(this).offset().top - sloH*5;
            if (scrollTop > offset) {
                $(this).addClass("angle");
            } else {
                $(this).removeClass("angle");
            }
        })

        //work section text나타나기
        $(".site-wrap .site .right h3").each(function (index) {
            let sloH = $(this).height();
            let offset = $(this).offset().top - sloH * 12;
            if (scrollTop > offset) {
                $(this).parent(".right").siblings(".center").addClass("show");
                $(this).parent(".right").siblings(".left").addClass("show");
                $(this).addClass("angle");
                $(this).siblings("dl").find("dt").addClass("show");
                $(this).siblings("dl").find("dd").addClass("show");
            } else {
                $(this).parent(".right").siblings(".center").removeClass("show");
                $(this).parent(".right").siblings(".left").removeClass("show");
                $(this).removeClass("angle");
                $(this).siblings("dl").find("dt").removeClass("show");
                $(this).siblings("dl").find("dd").removeClass("show");
            }
        })
        const stairLi = $(".stairText li");
        let stairOffset = $(".stairText").offset().top - 300;
        if (scrollTop > stairOffset) {
            stairLi.addClass("show");
        } else {
            stairLi.removeClass("show");
        }

    });
}

//가로 스크롤 글자
gsap.registerPlugin(ScrollTrigger);

const showDemo = () => {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);

    gsap.utils.toArray(".lt3").forEach((section, index) => {
        const w = section.querySelector(".wrapper");
        const [x, xEnd] =
            index % 1
                ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
                : [w.scrollWidth * -1, "-20%"];
        gsap.fromTo(
            w,
            { x },
            {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 2
                }
            }
        );
    });
};
showDemo();

//헤더 메뉴
$(".headerMenu ul li").click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = $(".content").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop: offset }, 500, "easeInOutCirc");
});
