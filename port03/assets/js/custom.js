//코드 모드 변환 
const codeMode = $(".codeVer");

codeMode.on("click",function(e){
    e.preventDefault();
    let thisI = $(this).parents("div .site").attr('class');
    let thisN = thisI.replace(/[^0-9]/g,'');
    let thisA = $(this).parents(".site"+thisN);
    let hasOn = thisA.find(".codeVer").hasClass("on");
    const codeList = $(".codeList");

    (hasOn) ? thisA.find(".codeVer").find("em").text("DARK") : thisA.find(".codeVer").find("em").text("LIGHT");

    thisA.find(".codeVer").toggleClass("on");
    thisA.find(".code").find("pre").toggleClass("on");
    thisA.find(".code").toggleClass("on");
    thisA.find(".codeList3").toggleClass("on");
});

//코드 탭메뉴
const codeList = $(".part2 .codeList li");

codeList.on("click",function(e){
    e.preventDefault();
    let aNum = $(this).index();
    let aP3 = $(this).parents(".part2").siblings(".codeBox");

    $(this).addClass("on").siblings().removeClass("on");
    aP3.removeClass("on");
    aP3.eq(aNum).addClass("on")
});

//클릭 시 클립보드 복사
$(".contact #contactTo").on('click',function(e){
    e.preventDefault();
    $(this).val(); 
    // Use try & catch for unsupported browser 
    try{ 
        // The important part (copy selected text) 
        document.execCommand('copy');
        alert("Copide!")
        // if(successful) answer.innerHTML = 'Copied!'; 
        // else answer.innerHTML = 'Unable to copy!'; 
    } catch(err) { alert('이 브라우저는 지원하지 않습니다.') }

})